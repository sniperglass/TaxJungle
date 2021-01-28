from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from apps.comment.serializer import CommentSerializer
from apps.comment.models import Comment


class CreateCommentView(ListCreateAPIView):
    """
    Create comment on a post and get list of all comments on single post
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_field = 'article_id'
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, article_id=self.kwargs['article_id'])
