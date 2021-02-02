from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from apps.user.models import User
from apps.user.serializer import UserSerializer


class MeView(RetrieveUpdateDestroyAPIView):
    """
    Get, Update and Delete logged in user
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class UserListView(ListAPIView):
    """
    List of all users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetSingleUser(RetrieveAPIView):
    """
    Get specific user by id
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'
