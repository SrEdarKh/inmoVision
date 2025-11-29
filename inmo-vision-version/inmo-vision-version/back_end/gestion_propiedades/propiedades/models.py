from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.fields import GenericRelation
from django_comments.models import Comment


# -----------------------------
# MODELO AGENTE
# -----------------------------
class Agente(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    telefono = models.CharField(max_length=12)

    class Meta:
        db_table = 'propiedad_agente'

    def __str__(self):
        return f"{self.nombre} - {self.telefono}"


# -----------------------------
# MODELO PROPIEDAD
# -----------------------------
class Propiedad(models.Model):

    class TipoDeNegocio(models.TextChoices):
        COMPRAR = 'COMP', 'Comprar'
        ARRENDAR = 'ARR', 'Arrendar'

    class TipoPropiedad(models.TextChoices):
        CASA = 'CASA', 'Casa'
        APARTAMENTO = 'APARTAMENTO', 'Apartamento'
        LOTE = 'LOTE', 'Lote'
        LOCAL = 'LOCAL', 'Local'

    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=12, decimal_places=2)
    habitaciones = models.CharField(max_length=3)
    banos = models.CharField(max_length=3)
    municipio = models.CharField(max_length=20)
    ciudad = models.CharField(max_length=30)
    barrio = models.CharField(max_length=20)
    direccion = models.CharField(max_length=250)

    tipo_negocio = models.CharField(
        max_length=4,
        choices=TipoDeNegocio.choices,
        default=TipoDeNegocio.ARRENDAR
    )

    tipo_propiedad = models.CharField(
        max_length=15,
        choices=TipoPropiedad.choices,
        default=TipoPropiedad.CASA
    )

    agente = models.ForeignKey(
        Agente,
        on_delete=models.CASCADE,
        related_name='propiedades',
        null=True,
        blank=True
    )

    main_image = models.ImageField(upload_to='propiedades/main/', null=True, blank=True)
    comentarios = GenericRelation(Comment)

    class Meta:
        db_table = "propiedades_propiedad"

    def __str__(self):
        return self.titulo


# -----------------------------
# FOTOS DE PROPIEDAD
# -----------------------------
class ImagenPropiedad(models.Model):
    propiedad = models.ForeignKey(Propiedad, related_name='imagenes', on_delete=models.CASCADE)
    foto_propiedad = models.ImageField(upload_to='propiedades/')

    class Meta:
        db_table = 'imagen_propiedad'


# -----------------------------
# USUARIO PERSONALIZADO
# -----------------------------
class Usuario(AbstractUser):
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    correo = models.EmailField(max_length=100, unique=True)
    foto_perfil = models.ImageField(upload_to='perfil/', null=True, blank=True)

    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = 'propiedades_usuario'

    def __str__(self):
        return self.nombre


# -----------------------------
# FOTOS EXTRA DE USUARIO
# -----------------------------
class FotoPerfil(models.Model):
    usuario = models.ForeignKey(Usuario, related_name='imagenes', on_delete=models.CASCADE)
    foto_perfil = models.ImageField(upload_to='usuarios/')


# -----------------------------
# MENSAJE DE CONTACTO
# -----------------------------
class MensajeContacto(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    asunto = models.CharField(max_length=200)
    mensaje = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre} {self.apellidos} - {self.asunto}"
