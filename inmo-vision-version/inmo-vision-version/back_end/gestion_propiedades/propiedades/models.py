from django.db import models
from django.contrib import admin


class Propiedad(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    direccion = models.CharField(max_length=250)
    precio = models.DecimalField(max_digits=12, decimal_places=2)
    # imagen = models.ImageField(upload_to='propiedades/', blank=True, null=True) es necesario instalar pip install pillow
    
    class Meta:
        db_table = "propiedades_propiedad"

    def __str__ (self):
        return self.titulo

