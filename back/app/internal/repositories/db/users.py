from internal.core.roles import Roles
from internal.repositories.db.helpers import hash_password
from internal.repositories.db.models import User
from internal.repositories.db.session import get_session_maker
from sqlalchemy import insert, select, update


class UserRepository:
    def __init__(self):
        self.session_maker = get_session_maker()

    async def get_user(self, login: str) -> tuple[User,]:
        query = select(User).where(User.login == login)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    async def get_user_role(self, login: str) -> Roles:
        query = select(User.role).where(User.login == login)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    async def get_all_users(self):
        query = select(User)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.all()

    async def add_user(self, login: str, password: str, role: Roles):
        if login is None and password is None and role is None:
            raise Exception()
        query = insert(User).values(login=login, password=hash_password(password), role=role.value)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def update_user(self, login: str, password: str = None, role: Roles = None):
        query = update(User).where(User.login == login)

        if login:
            query = query.values(login=login)

        if password:
            query = query.values(password=hash_password(password))

        if role:
            query = query.values(role=role.value)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()
