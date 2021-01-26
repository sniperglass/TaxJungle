from apps.registration_profile.serializers.registration_serializer import RegistrationSerializer, \
    RegistrationValidationSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


# Only used for parameter in yasg docs
class PasswordResetSerializer(RegistrationSerializer):
    def create(self, validated_data):
        pass


class PasswordResetValidationSerializer(RegistrationValidationSerializer):
    def validate(self, attrs):
        return attrs

    class Meta:
        model = User
        fields = ['email', 'code', 'password', 'password_repeat']
