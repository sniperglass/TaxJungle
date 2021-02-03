from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
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

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, article_id=self.kwargs['article_id'])


class RemoveComment(DestroyAPIView):
    """
    Delete comment by it's owner
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated, IsUserOrReadOnly]
