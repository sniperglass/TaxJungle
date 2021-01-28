from django.urls import path
from apps.comment.views import CreateCommentView

urlpatterns = [
    path('<int:article_id>/', CreateCommentView.as_view(), name="comment")
]
