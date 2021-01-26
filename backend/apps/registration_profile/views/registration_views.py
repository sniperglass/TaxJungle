from rest_framework import generics, response, status
from django.contrib.auth import get_user_model
from apps.registration_profile.serializers.registration_serializer import \
    RegistrationSerializer, \
    RegistrationValidationSerializer
from apps.user.serializer import UserSerializer
from rest_framework.permissions import AllowAny
from drf_yasg.utils import swagger_auto_schema

User = get_user_model()


class RegistrationView(generics.GenericAPIView):
    """
    Create an inactive user with email info only and send the user
    an email with a validation code.
    """
    queryset = User
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(responses={status.HTTP_204_NO_CONTENT: "No Content"})
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class RegistrationValidationView(generics.GenericAPIView):
    """
    Update an inactive user with the required info and activate the user.
    """
    serializer_class = RegistrationValidationSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return generics.get_object_or_404(User.objects.all(),
                                          email=self.request.data.get('email'))

    @swagger_auto_schema(responses={status.HTTP_200_OK: UserSerializer})
    def put(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_object(), data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(
            data=UserSerializer(
                self.get_object()
            ).data,
            status=status.HTTP_200_OK
        )
