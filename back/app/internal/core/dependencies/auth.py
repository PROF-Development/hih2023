from fastapi import HTTPException, Request

from internal.core.exceptions import AccessForbiddenException, ExpiredTokenException, InvalidTokenException
from internal.services.auth.jwt import decode_jwt


class BaseAuthorize:
    """Базовый класс зависимости FA для JWT Авторизации"""

    async def __call__(self, request: Request):
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
    async def has_access(self, login: str):
        return True


class ManagerBaseAuthorize(BaseAuthorize):
    async def has_access(self, login: str):
        return False
