from internal.repositories.db._session import get_session_maker


class BaseRepository:
    def __init__(self):
        self.session_maker = get_session_maker()
