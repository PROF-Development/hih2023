from internal.repositories.db._session import engine
from internal.repositories.db.models.base import Base


async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
