from pathlib import Path
import os
from dotenv import load_dotenv

# BASE DIR
BASE_DIR = Path(__file__).resolve().parent.parent

# Cargar variables de entorno
load_dotenv(BASE_DIR / ".env")

# ==========================
# Seguridad
# ==========================
SECRET_KEY = os.getenv("SECRET_KEY", "django-insecure-temporal-key")
DEBUG = os.getenv("DEBUG", "False") == "True"
ALLOWED_HOSTS = ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    "inmovision.com",  # tu dominio real
]

# ==========================
# Aplicaciones instaladas
# ==========================
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Apps externas
    'rest_framework',
    'corsheaders',

    # Apps del proyecto
    'propiedades',
]

# ==========================
# Middleware
# ==========================
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',   # debe ir primero
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# ==========================
# Base de datos
# ==========================
DATABASES = {
    'default': {
        'ENGINE': os.getenv("DB_ENGINE", "django.db.backends.sqlite3"),
        'NAME': BASE_DIR / os.getenv("DB_NAME", "db.sqlite3"),
        'USER': os.getenv("DB_USER", ""),
        'PASSWORD': os.getenv("DB_PASSWORD", ""),
        'HOST': os.getenv("DB_HOST", ""),
        'PORT': os.getenv("DB_PORT", ""),
    }
}

# ==========================
# Passwords
# ==========================
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# ==========================
# Internacionalización
# ==========================
LANGUAGE_CODE = 'es-co'          # idioma español (Colombia)
TIME_ZONE = 'America/Bogota'     # zona horaria Colombia
USE_I18N = True
USE_TZ = True

# ==========================
# Archivos estáticos
# ==========================
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / "staticfiles"

# ==========================
# Configuración CORS
# ==========================
CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",   # Frontend local en Vite
]
# ==========================
# Clave primaria
# ==========================
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'