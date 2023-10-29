import datetime

from pydantic import BaseModel

from internal.api.v1.schema.common import DocumentIdSchema, DocumentNoIdOptionalSchema, DocumentNoIdSchema


class GetDocumentsRequest(DocumentNoIdOptionalSchema):
    pass


class PatchDocumentRequest(DocumentIdSchema, DocumentNoIdOptionalSchema):
    pass


class CreateDocumentRequest(DocumentNoIdSchema):
    pass


class AddDocumentRequest(BaseModel):
    document_type: str
