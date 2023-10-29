from internal.repositories.db.helpers import connection_string
from internal.repositories.db.models.base import Base
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine


_engine = create_async_engine(connection_string)


def get_session_maker():
    return async_sessionmaker(
        _engine,
        autoflush=False,
        expire_on_commit=False,
    )


async def create_tables():
    async with _engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
