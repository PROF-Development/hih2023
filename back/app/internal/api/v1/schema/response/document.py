from pydantic import BaseModel

from internal.api.v1.schema.common import DocumentIdSchema, DocumentNoIdSchema


class GetDocumentResponse(DocumentIdSchema, DocumentNoIdSchema):
    pass


class GetDocumentsResponse(BaseModel):
    documents: list[GetDocumentResponse]
