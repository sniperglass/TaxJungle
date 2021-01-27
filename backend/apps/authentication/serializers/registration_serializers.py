from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from uuid import uuid4
from apps.authentication.models import CODE_LENGTH

User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    # Create user
    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data.get('email'),
            username=str(uuid4()),  # Use uuid to set a unique username until validation
            is_active=False,
        )
        user.save()
        return user

    class Meta:
        model = User
        fields = ['email']


class RegistrationValidationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, validators=[password_validation.validate_password])
    password_repeat = serializers.CharField(max_length=128, validators=[password_validation.validate_password])
    code = serializers.CharField()

    # Check if user has already been activated
    def validate(self, attrs):
        if self.instance.is_active:
            raise serializers.ValidationError({'user': 'This user has already been activated.'})
        return attrs

    def validate_password(self, password):
        password_repeat = self.context.get('request').data.get('password_repeat')
        if not password == password_repeat:
            raise serializers.ValidationError('The given passwords don\'t match.')
        return password

    def validate_code(self, code):
        user_code = self.instance.registration_profile.code
        if not (code == user_code and len(code) == CODE_LENGTH):
            raise serializers.ValidationError(
                'The given code is incorrect or doesn\'t belong to the user with given email.')
        return code

    # Update user
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                # Use set_password for password hashing
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        setattr(instance, 'is_active', True)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', 'last_name', 'code', 'password', 'password_repeat']
