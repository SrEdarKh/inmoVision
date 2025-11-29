from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Propiedad, Usuario, Agente, MensajeContacto


# -----------------------------
#   SERIALIZER PROPIEDAD
# -----------------------------
class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = '__all__'


# -----------------------------
#   SERIALIZER USUARIO
# -----------------------------
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        extra_kwargs = {
            "contrasena": {"write_only": True}
        }

    def create(self, validated_data):
        # Crear usuario correctamente en Django
        usuario = Usuario(
            correo=validated_data["correo"],
            username=validated_data["username"],
            nombre=validated_data["nombre"],
            apellido=validated_data["apellido"],
        )
        usuario.set_password(validated_data["contrasena"])
        usuario.save()
        return usuario


# -----------------------------
#   SERIALIZER LOGIN
# -----------------------------
class LoginSerializer(serializers.Serializer):
    correo = serializers.EmailField()
    contrasena = serializers.CharField(write_only=True)

    def validate(self, data):
        correo = data.get("correo")
        contrasena = data.get("contrasena")

        usuario = authenticate(
            username=correo,      # porque USERNAME_FIELD = 'correo'
            password=contrasena
        )

        if not usuario:
            raise serializers.ValidationError("Credenciales incorrectas")

        data["usuario"] = usuario
        return data


# -----------------------------
#   SERIALIZER AGENTE
# -----------------------------
class AgenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agente
        fields = "__all__"


# -----------------------------
#   SERIALIZER MENSAJE CONTACTO
# -----------------------------
class MensajeContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MensajeContacto
        fields = "__all__"
