from fastapi import APIRouter, Depends, Response

from internal.api.v1.schema.request.auth import LoginRequest
from internal.api.v1.schema.response.auth import LoginResponse
from internal.core.dependencies.auth import EmployeeBaseAuthorize
from internal.services.auth.service import AuthService


AUTH_ROUTER = APIRouter(prefix='/auth')


@AUTH_ROUTER.post('/login')
async def login_handler(data: LoginRequest, service: AuthService = Depends()) -> LoginResponse:
    data = await service.login_service(**data.model_dump())
    return LoginResponse(token=data['access_token'], role=data['role'])


@AUTH_ROUTER.get('/check', dependencies=[Depends(EmployeeBaseAuthorize())])
async def check_auth_handler():
    return Response(status_code=200)
