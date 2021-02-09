from rest_framework import status
from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.comment.permissions import IsUserOrReadOnly
from apps.comment.serializer import CommentSerializer
from apps.comment.models import Comment


class CreateCommentView(ListCreateAPIView):
    """
    Create comment on a article and get list of all comments on single article
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'article_id'
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data={**request.data}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user, article_id=self.kwargs['article_id'])
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RemoveComment(DestroyAPIView):
    """
    Delete comment by it's owner
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated, IsUserOrReadOnly]
