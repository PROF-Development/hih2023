from pydantic import BaseModel


class LoginResponse(BaseModel):
    token: str
    role: str = 'Employee'
