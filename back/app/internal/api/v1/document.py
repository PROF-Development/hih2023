from uuid import UUID

from fastapi import APIRouter, Body, Depends, Response

from internal.api.v1.schema.request.document import AddDocumentRequest, CreateDocumentRequest, GetDocumentsRequest, PatchDocumentRequest
from internal.api.v1.schema.response.document import GetDocumentResponse, GetDocumentsResponse
from internal.core.dependencies import ManagerBaseAuthorize
from internal.core.roles import Roles
from internal.services.document.document import DocumentService


DOCUMENT_ROUTER = APIRouter(prefix='/document', tags=['Documents'])


@DOCUMENT_ROUTER.get('/document/types')
async def get_doctypes_handler(service: DocumentService = Depends()):
    data = await service.get_document_types()
    return data


@DOCUMENT_ROUTER.post('/document/type')
async def add_doctype_handler(document_type: AddDocumentRequest = Depends(), service: DocumentService = Depends()):
    await service.add_document_type(document_type.document_type)


@DOCUMENT_ROUTER.post('/filter_documents')
async def get_documents_handler(request_data: GetDocumentsRequest, service: DocumentService = Depends()) -> GetDocumentsResponse:
    data = await service.get_documents(**request_data.model_dump())
    return GetDocumentsResponse(documents=data)


@DOCUMENT_ROUTER.post('/document')
async def create_document_handler(request_data: CreateDocumentRequest = Body(), service: DocumentService = Depends()):
    await service.add_document(**request_data.model_dump())
    return Response(status_code=200)


@DOCUMENT_ROUTER.patch('/document')
async def update_document_handler(request_data: PatchDocumentRequest = Body()):
    return Response(status_code=200)
