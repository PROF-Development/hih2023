from fastapi.exceptions import HTTPException

from internal.services.auth.jwt import encode_jwt
from internal.services.user import UserService


class AuthService:
    def __init__(self):
        self.user_service = UserService()

    async def login_service(self, login: str, password: str) -> dict:
        """Logins the user and returns generated token"""
        if await self.user_service.verify_credentials(login, password):
            return {'access_token': f'Bearer {encode_jwt(login)}', 'role': await self.user_service.get_user_role(login)}
        raise HTTPException(status_code=401, detail='Invalid credentials')
