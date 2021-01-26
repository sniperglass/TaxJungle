from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from apps.user.serializer import UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class TokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Add context to nested serializer to get full avatar url
        data['user'] = UserSerializer(self.user, context=self.context).data
        return data


# Only used for response in yasg docs
class TokenObtainResponseSerializer(TokenObtainSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields.pop(self.username_field)
        self.fields.pop('password')

        self.fields['refresh'] = serializers.CharField(min_length=1)
        self.fields['access'] = serializers.CharField(min_length=1)
        self.fields['user'] = UserSerializer()
