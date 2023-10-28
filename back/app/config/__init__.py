"""
Пакет конфигураций приложения, конфигурации переопределяются загрузкой параметров из локального файла.
"""
from internal.core.settings.loaders import local

from ._base import *
from ._custom import *
from ._db import *


local.load_config(globals(), filename=f'{APP_DIR}/config/local.yaml')
