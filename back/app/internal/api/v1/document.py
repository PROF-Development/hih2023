from uuid import UUID

from fastapi import APIRouter, Body, Depends, Response

from internal.api.v1.schema.request.document import CreateDocumentRequest, GetDocumentsRequest, PatchDocumentRequest
from internal.api.v1.schema.response.document import GetDocumentResponse, GetDocumentsResponse
from internal.core.dependencies import ManagerBaseAuthorize
from internal.core.roles import Roles
from internal.services.user import UserService


DOCUMENT_ROUTER = APIRouter(prefix='/document', tags=['Documents'])


@DOCUMENT_ROUTER.get('/documents')
async def get_documents_handler(request_data: GetDocumentsRequest) -> GetDocumentsResponse:
    pass


@DOCUMENT_ROUTER.post('/document')
async def create_document_handler(request_data: CreateDocumentRequest = Body()):
    return Response(status_code=200)


@DOCUMENT_ROUTER.patch('/document')
async def update_document_handler(request_data: PatchDocumentRequest = Body()):
    return Response(status_code=200)
