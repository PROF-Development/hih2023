from internal.core.roles import Roles
from internal.repositories.db.models.base import Base
from sqlalchemy import LargeBinary, String
from sqlalchemy.orm import Mapped, mapped_column


class User(Base):
    __tablename__ = 'users'
    login: Mapped[str] = mapped_column(String, primary_key=True)
    password: Mapped[bytes] = mapped_column(LargeBinary, nullable=False)
    role: Mapped[str] = mapped_column(String, nullable=False, default=Roles.employee.value)
