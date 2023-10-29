import datetime
from uuid import UUID

from internal.repositories.db.base import BaseRepository
from internal.repositories.db.models import Document, DocumentTags, DocumentTypes
from sqlalchemy import delete, insert, select, update


class DocumentRepository(BaseRepository):
    def __init__(self):
        super().__init__()
        self.table = Document
        self.doc_types = DocumentTypes

    async def get_document_types(self):
        query = select(self.doc_types)

        async with self.session_maker() as session:
            res = await session.execute(query)
        return res.all()

    async def add_document_type(self, document_type: str):
        query = insert(self.doc_types).values(type=document_type)
        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def get_document(self, document_uuid: UUID):
        query = select(self.table).where(self.table.id == document_uuid)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.first()

    async def get_documents(
        self, document_type: str = None, name: str = None, number: str = None, release_date: datetime.date = None, start_date: datetime.date = None
    ):
        query = select(self.table)

        if document_type:
            query = query.where(self.table.document_type == document_type)

        if name:
            query = query.filter(self.table.name.like(f'%{name}%'))

        if number:
            query = query.where(self.table.number == number)

        if release_date:
            query = query.where(self.table.release_date == release_date)

        if start_date:
            query = query.where(self.table.start_date == start_date)

        async with self.session_maker() as session:
            res = await session.execute(query)

        return res.all()

    async def add_document(self, document_uuid: UUID, document_type: str, name: str, number: str, release_date: datetime.date, start_date: datetime.date):
        query = insert(self.table).values(
            id=document_uuid, document_type=document_type, name=name, number=number, release_date=release_date, start_date=start_date
        )

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def update_document(
        self,
        document_uuid: UUID,
        document_type: str = None,
        name: str = None,
        number: str = None,
        release_date: datetime.date = None,
        start_date: datetime.date = None,
    ):
        query = update(self.table).where(self.table.id == document_uuid)

        if document_type:
            query = query.values(document_type=document_type)

        if name:
            query = query.values(name=name)

        if number:
            query = query.values(number=number)

        if release_date:
            query = query.values(release_date=release_date)

        if start_date:
            query = query.values(release_date=start_date)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()

    async def delete_document(self, document_uuid: UUID):
        query = delete(self.table).where(self.table.id == document_uuid)

        async with self.session_maker() as session:
            await session.execute(query)
            await session.commit()
