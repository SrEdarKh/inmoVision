from django.shortcuts import render
from rest_framework import viewsets
from .models import Propiedad, Usuario, Agente, MensajeContacto
from .serializers import PropiedadSerializer, UsuarioSerializer, AgenteSerializer, MensajeContactoSerializer

# Create your views here.
class PropiedadViewSet(viewsets.ModelViewSet):
    queryset = Propiedad.objects.all()
    serializer_class = PropiedadSerializer

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class AgenteViewSet(viewsets.ModelViewSet):
    queryset = Agente.objects.all()
    serializer_class = AgenteSerializer

class MensajeContactoViewSet(viewsets.ModelViewSet):
    queryset = MensajeContacto.objects.all()
    serializer_class = MensajeContactoSerializer

