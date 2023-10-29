import datetime
from uuid import UUID

from internal.repositories.db.document import DocumentRepository


class DocumentService:
    def __init__(self):
        self.repository = DocumentRepository()

    def get_documents(
        self, document_type: str = None, name: str = None, number: str = None, release_date: datetime.date = None, start_date: datetime.date = None
    ):
        pass

    def add_document(self, document_type: str, name: str, number: str, release_date: datetime.date, start_date: datetime.date):
        pass

    def update_document(
        self,
        document_uuid: UUID,
        document_type: str = None,
        name: str = None,
        number: str = None,
        release_date: datetime.date = None,
        start_date: datetime.date = None,
    ):
        pass

    def delete_document(self, document_uuid: UUID):
        pass
