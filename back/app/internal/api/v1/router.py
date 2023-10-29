from fastapi import APIRouter

from internal.api.v1.auth import AUTH_ROUTER
from internal.api.v1.document import DOCUMENT_ROUTER
from internal.api.v1.manager import MANAGER_ROUTER


V1_ROUTER = APIRouter(prefix='/v1')
V1_ROUTER.include_router(AUTH_ROUTER)
V1_ROUTER.include_router(MANAGER_ROUTER)
V1_ROUTER.include_router(DOCUMENT_ROUTER)
