from uuid import UUID

from internal.repositories.db.base import BaseRepository
from internal.repositories.db.models import DocumentTags
from sqlalchemy import bindparam, delete, insert, select


class DocumentTagsRepository(BaseRepository):
    def __init__(self):
        super().__init__()
        self.table = DocumentTags

    async def get_document_tags(self, document_uuid: UUID):
        query = select(self.table).where(self.table.id == document_uuid)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.all()

    async def get_documents(self, document_uuid: UUID, tags: list[str]):
        result = []
        async with self.session_maker() as session:
            for tag in tags:
                query = select(self.table).where(self.table.id == document_uuid, self.table.tag == tag)
                val = (await session.execute(query)).first()
                if val:
                    result.append(val[0])
        return result

    async def add_document_tags(self, document_uuid: UUID, tags: list[str]):
        async with self.session_maker() as session:
            for el in tags:
                query = insert(self.table).values(id=document_uuid, tag=el)
                await session.execute(query)
            await session.commit()

    async def delete_document_tag(self, document_uuid: UUID, tag: str):
        query = delete(self.table).where(self.table.id == document_uuid, self.table.tag == tag)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()
