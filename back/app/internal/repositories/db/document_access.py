from uuid import UUID

from internal.repositories.db.base import BaseRepository
from internal.repositories.db.models import AccessLevels, DocumentAccess
from sqlalchemy import delete, insert, select, update


class DocumentAccessRepository(BaseRepository):
    def __init__(self):
        super().__init__()
        self.table = DocumentAccess

    def get_document_access(self, document_uuid: UUID):
        query = select(self.table).where(self.table.id == document_uuid)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    def add_document_access(self, document_uuid: UUID, access_level: str):
        query = insert(self.table).values(id=document_uuid, access_level=access_level)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def update_document_access(self, document_uuid: UUID, access_level: str):
        query = update(self.table).where(self.table.id == document_uuid).values(access_level=access_level)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def delete_document_access(self, document_uuid: UUID, access_level: str):
        query = delete(self.table).where(self.table.id == document_uuid, access_level=access_level)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()


class AccessLevelsRepository(BaseRepository):
    def __init__(self):
        super().__init__()
        self.table = AccessLevels

    def get_access_level(self, access_level: str):
        query = select(self.table).where(self.table.access_level == access_level)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    def add_access_level(self, access_level: str):
        query = insert(self.table).values(access_level=access_level)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def delete_access_level(self, access_level: str):
        query = delete(self.table).where(self.table.access_level == access_level)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()
