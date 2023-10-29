import datetime
from uuid import UUID

from pydantic import BaseModel


class DocumentNoIdSchema(BaseModel):
    document_type: str
    name: str
    number: str
    release_date: datetime.date
    start_date: datetime.date
    tags: list[str]


class DocumentIdSchema(BaseModel):
    id: UUID


class DocumentNoIdOptionalSchema(BaseModel):
    document_type: str = None
    name: str = None
    number: str = None
    release_date: datetime.date = None
    start_date: datetime.date = None
    tags: list[str] = None
