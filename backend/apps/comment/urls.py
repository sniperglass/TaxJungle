from django.urls import path
from apps.comment.views import CreateCommentView, RemoveComment

urlpatterns = [
    path('<int:article_id>/', CreateCommentView.as_view(), name="comment"),
    path('delete/<int:comment_id>/', RemoveComment.as_view(), name="delete_comment"),
]
