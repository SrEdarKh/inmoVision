from rest_framework import serializers
from .models import Propiedad
from propiedades.models import Propiedad

class PropiedadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Propiedad
        fields = '__all__' #['id', 'titulo', 'descripcion', 'direccio', 'precio']