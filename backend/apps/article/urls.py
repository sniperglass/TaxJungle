from django.urls import path
from apps.article.views import ArticleCreateView, ListArticleView, UpdateDeleteArticleView, ToggleArticle

urlpatterns = [
    path('new/', ArticleCreateView.as_view(), name="new_article"),
    path('', ListArticleView.as_view(), name="all_articles"),
    path('<int:article_id>/', UpdateDeleteArticleView.as_view(), name="update_delete"),
    path('likes/<int:article_id>/', ToggleArticle.as_view(), name="like_article"),
]