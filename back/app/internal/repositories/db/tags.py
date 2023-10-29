from uuid import UUID

from internal.repositories.db.base import BaseRepository
from internal.repositories.db.models import DocumentTags
from sqlalchemy import bindparam, delete, insert, select, update


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
        query = select(self.table).where(self.table.id == document_uuid, self.table.tag == bindparam('tags', expanding=True))

        async with self.session_maker() as session:
            res = await session.execute(query, {'tags': tags})

        return res.all()

    async def add_document_tags(self, document_uuid: UUID, tags: list[str]):
        query = insert(self.table).values({self.table.id: document_uuid, self.table.tag: bindparam('tags', expanding=True)})

        async with self.session_maker() as session:
            await session.execute(query, {'tags': tags})
            await session.commit()

    async def delete_document_tag(self, document_uuid: UUID, tag: str):
        query = delete(self.table).where(self.table.id == document_uuid, self.table.tag == tag)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()
