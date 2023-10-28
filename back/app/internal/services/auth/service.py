from internal.core.exceptions import InvalidCredentialsException
from internal.services.auth.jwt import encode_jwt


class AuthService:
    def login_service(self, login: str, password: str) -> dict:
        """Logins the user and returns generated token"""
        if login == 'auth' and password == 'pass':
            return {
                'access_token': f'Bearer {encode_jwt(login)}',
            }
        raise InvalidCredentialsException()
