from typing import Iterable

from fastapi.exceptions import HTTPException

from internal.core.roles import Roles
from internal.repositories.db.helpers import check_password
from internal.repositories.db.users import UserRepository


class UserService:
    def __init__(self):
        self.repository = UserRepository()

    async def check_access(self, login: str, expected_roles: Iterable[Roles]) -> bool:
        user = (await self.repository.get_user(login))[0]
        return user.role in expected_roles

    async def verify_credentials(self, login: str, password: str) -> bool:
        user = await self.repository.get_user(login)
        if not user:
            return False
        user = user[0]

        return check_password(password, user.password)

    async def get_user_role(self, login: str):
        user = await self.repository.get_user_role(login)
        if not user:
            raise HTTPException(status_code=404, detail='User not found')
        return user[0]

    async def get_all_users(self):
        users = await self.repository.get_all_users()
        return [{'login': user[0].login, 'role': user[0].role} for user in users]

    async def get_user(self, login: str):
        user = await self.repository.get_user(login)

        if not user:
            raise HTTPException(status_code=404, detail='User not found')
        user = user[0]

        return {'login': user.login, 'role': user.role}

    async def add_user(self, login: str, password: str, role: Roles = Roles.employee):
        try:
            await self.repository.add_user(login, password, role)
        except Exception as e:
            raise e

    async def update_user(self, login: str = None, password: str = None, role: Roles = None):
        await self.repository.update_user(login, password, role)

    async def delete(self, login: str):
        pass
