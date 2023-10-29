from uuid import UUID

from internal.repositories.db.models.base import Base
from sqlalchemy import ForeignKey, LargeBinary, String
from sqlalchemy.orm import Mapped, mapped_column


class AccessLevels(Base):
    __tablename__ = 'access_levels'
    access_level: Mapped[str] = mapped_column(primary_key=True)


class DocumentAccess(Base):
    __tablename__ = 'documents_access'
    id: Mapped[UUID] = mapped_column(ForeignKey('documents.id'), primary_key=True, autoincrement=False)
    access_level: Mapped[str] = mapped_column(ForeignKey('access_levels.access_level'))
