import datetime
from uuid import UUID, uuid4

from fastapi.exceptions import HTTPException

import config
from internal.repositories.db.document import DocumentRepository
from internal.repositories.db.tags import DocumentTagsRepository
from sqlalchemy.exc import IntegrityError


class DocumentService:
    def __init__(self):
        self.repository = DocumentRepository()
        self.tags_repository = DocumentTagsRepository()

    async def get_document_types(self):
        data = await self.repository.get_document_types()
        if data:
            return list(el[0] for el in data)
        return []

    async def add_document_type(self, document_type: str):
        try:
            await self.repository.add_document_type(document_type)
        except IntegrityError as e:
            raise HTTPException(409, 'Document type already exists') from e

    async def get_documents(
        self,
        document_type: str = None,
        name: str = None,
        number: str = None,
        release_date: datetime.date = None,
        start_date: datetime.date = None,
        tags: list[str] = None,
    ):
        data = await self.repository.get_documents(document_type, name, number, release_date, start_date)
        if config.DEBUG or not config.DEBUG:
            return [
                {
                    'id': el[0].id,
                    'document_type': el[0].document_type,
                    'name': el[0].name,
                    'number': el[0].number,
                    'release_date': el[0].release_date,
                    'start_date': el[0].start_date,
                    'tags': ['something'],
                }
                for el in data
            ]
        if not tags:
            return data

        res = []

        for el in data:
            el_id = el[0].id
            res.append(self.tags_repository.get_documents(el_id, tags))

    async def add_document(self, document_type: str, name: str, number: str, release_date: datetime.date, start_date: datetime.date, tags: list[str]):
        uuid = uuid4()
        try:
            await self.repository.add_document(uuid, document_type, name, number, release_date, start_date)
        except IntegrityError as e:
            raise HTTPException(409, detail='Document already exists') from e
        await self.tags_repository.add_document_tags(uuid, tags)

    async def update_document(
        self,
        document_uuid: UUID,
        document_type: str = None,
        name: str = None,
        number: str = None,
        release_date: datetime.date = None,
        start_date: datetime.date = None,
    ):
        await self.repository.update_document(document_uuid, document_type, name, number, release_date, start_date)

    async def delete_document(self, document_uuid: UUID):
        await self.repository.delete_document(document_uuid)
