from rest_framework import generics, response, status
from django.contrib.auth import get_user_model
from apps.registration_profile.serializers.password_reset_serializer import PasswordResetSerializer, \
    PasswordResetValidationSerializer
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from drf_yasg.utils import swagger_auto_schema

User = get_user_model()


class PasswordResetView(generics.GenericAPIView):
    """
    Send the user an email with a password reset code.
    """
    serializer_class = PasswordResetSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return generics.get_object_or_404(User.objects.all(), email=self.request.data.get('email'))

    @swagger_auto_schema(responses={status.HTTP_204_NO_CONTENT: "No Content"})
    def post(self, request, *args, **kwargs):
        user = self.get_object()
        user.registration_profile.update_code()
        send_mail(
            'Password reset',
            f'Here is your password reset code: {user.registration_profile.code}',
            None,
            [user.email],
            fail_silently=False,
        )
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class PasswordResetValidationView(generics.GenericAPIView):
    """
    Update the user with the new password.
    """
    serializer_class = PasswordResetValidationSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return generics.get_object_or_404(User.objects.all(), email=self.request.data.get('email'))

    @swagger_auto_schema(responses={status.HTTP_204_NO_CONTENT: "No Content"})
    def patch(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user.registration_profile.update_code()
        return response.Response(status=status.HTTP_204_NO_CONTENT)
