from fastapi import Depends, HTTPException, Request

import config
from internal.core.exceptions import AccessForbiddenException, ExpiredTokenException, InvalidTokenException
from internal.core.roles import Roles
from internal.services.auth.jwt import decode_jwt
from internal.services.user import UserService


class BaseAuthorize:
    """Базовый класс зависимости авторизации FA для JWT Авторизации"""

    def __init__(self):
        self.user_service = UserService()

    async def __call__(self, request: Request):
        if config.DEBUG:
            return

        raw_token = request.headers.get('Authorization')

        if not raw_token:
            raise HTTPException(status_code=401, detail='Token is empty')

        auth_type, token = raw_token.split(' ')

        if auth_type != 'Bearer':
            raise HTTPException(status_code=401, detail=f'Invalid authentication type {auth_type}')

        try:
            payload = decode_jwt(token)
        except InvalidTokenException as e:
            raise HTTPException(status_code=401, detail='Invalid token') from e
        except ExpiredTokenException as e:
            raise HTTPException(status_code=401, detail='Token expired') from e

        try:
            await self.has_access(payload.get('login'))
        except AccessForbiddenException as e:
            raise HTTPException(status_code=403, detail='Access restricted') from e

    async def has_access(self, login: str):
        raise NotImplementedError()


class EmployeeBaseAuthorize(BaseAuthorize):
    async def has_access(self, login: str) -> bool:
        return await self.user_service.check_access(login, (Roles.employee, Roles.manager))


class ManagerBaseAuthorize(BaseAuthorize):
    async def has_access(self, login: str) -> bool:
        return await self.user_service.check_access(login, (Roles.employee, Roles.manager))
