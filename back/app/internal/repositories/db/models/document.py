import datetime
from uuid import UUID

from internal.repositories.db.models.base import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column


class DocumentTypes(Base):
    __tablename__ = 'document_types'
    type: Mapped[str] = mapped_column(primary_key=True)


class Document(Base):
    __tablename__ = 'documents'
    id: Mapped[UUID] = mapped_column(autoincrement=False, unique=True)
    document_type: Mapped[str] = mapped_column(ForeignKey('document_types.type'), nullable=True)
    name: Mapped[str] = mapped_column(nullable=False, primary_key=True)
    number: Mapped[str] = mapped_column(nullable=False, primary_key=True)
    release_date: Mapped[datetime.date] = mapped_column(nullable=False)
    start_date: Mapped[datetime.date] = mapped_column(nullable=False)


class DocumentTags(Base):
    __tablename__ = 'document_tags'
    id: Mapped[UUID] = mapped_column(ForeignKey('documents.id'), primary_key=True)
    tag: Mapped[str] = mapped_column(nullable=False, primary_key=True)
