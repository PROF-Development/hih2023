from typing import Any, Optional

from pydantic import BaseModel, model_validator

from internal.core.roles import Roles


class CreateUserRequest(BaseModel):
    login: str
    password: str
    role: Roles


class UpdateUserRequest(BaseModel):
    login: str
    password: Optional[str] = None
    role: Optional[Roles] = None

    @model_validator(mode='before')
    @classmethod
    def custom_validate_model(cls, data: Any):
        if isinstance(data, dict):
            if not (data.get('password') or data.get('role')):
                raise ValueError('At least one of parameters should be passed')
        return data
