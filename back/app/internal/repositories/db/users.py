from internal.core.roles import Roles
from internal.core.utils import hash_password
from internal.repositories.db.base import BaseRepository
from internal.repositories.db.models import User
from sqlalchemy import insert, select, update


class UserRepository(BaseRepository):
    def __init__(self):
        super().__init__()
        self.table = User

    async def get_user(self, login: str) -> tuple[User,]:
        query = select(self.table).where(self.table.login == login)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    async def get_user_role(self, login: str):
        query = select(self.table.role).where(self.table.login == login)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    async def get_all_users(self):
        query = select(self.table)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.all()

    async def add_user(self, login: str, password: str, role: Roles):
        if login is None and password is None and role is None:
            raise Exception()
        query = insert(self.table).values(login=login, password=hash_password(password), role=role.value)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def update_user(self, login: str, password: str = None, role: Roles = None):
        query = update(self.table).where(self.table.login == login)

        if login:
            query = query.values(login=login)

        if password:
            query = query.values(password=hash_password(password))

        if role:
            query = query.values(role=role.value)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()
