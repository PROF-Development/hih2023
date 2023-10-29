from fastapi import APIRouter, Body, Depends

from internal.api.v1.schema.request.manager import CreateUserRequest, UpdateUserRequest
from internal.core.dependencies import ManagerBaseAuthorize
from internal.core.roles import Roles
from internal.services.user import UserService


MANAGER_ROUTER = APIRouter(prefix='/manager', dependencies=[Depends(ManagerBaseAuthorize())])


@MANAGER_ROUTER.get('/users')
async def get_users_handler(service: UserService = Depends()):
    data = await service.get_all_users()
    return data


@MANAGER_ROUTER.get('/user')
async def get_user_handler(login: str, service: UserService = Depends()):
    repo = await service.get_user(login)
    return repo


@MANAGER_ROUTER.post('/user')
async def add_user_handler(request_data: CreateUserRequest = Body(), service: UserService = Depends()):
    repo = await service.add_user(**request_data.model_dump())
    return repo


@MANAGER_ROUTER.patch('/user')
async def update_user_handler(request_data: UpdateUserRequest = Body(), service: UserService = Depends()):
    await service.update_user(**request_data.model_dump())


@MANAGER_ROUTER.delete('/user')
async def check_user_handler(login: str, service: UserService = Depends()):
    res = await service.delete(login)
    return res
