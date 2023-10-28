import config
import sqlalchemy
from bcrypt import gensalt, hashpw
from passlib.context import CryptContext
from sqlalchemy import URL


pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


connection_string = URL.create(
    drivername='postgresql+asyncpg',
    username=config.POSTGRES_USER,
    password=config.POSTGRES_PASSWORD,
    database=config.POSTGRES_DB,
    host=config.POSTGRES_HOST,
    port=config.POSTGRES_PORT,
)


def hash_password(password: str) -> bytes:
    return hashpw(password.encode('utf-8'), gensalt())


def check_password(password: str, password_hash: bytes):
    return pwd_context.verify(password, password_hash.decode('utf-8'))


def row_to_dict(row: sqlalchemy.engine.row.Row) -> dict:
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))
    return d
