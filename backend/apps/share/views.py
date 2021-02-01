from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.share.models import Share
from apps.share.serializer import ShareSerializer


class ShareView(CreateAPIView):
    serializer_class = ShareSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        data = request.data
        data['user'] = self.request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        #self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
