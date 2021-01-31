from django.urls import path
from apps.article.views import ArticleCreateView, ListArticleView, UpdateDeleteArticleView, ToggleArticle, SingleArticle

urlpatterns = [
    path('new/', ArticleCreateView.as_view(), name="new_article"),
    path('', ListArticleView.as_view(), name="all_articles"),
    path('<int:article_id>/', UpdateDeleteArticleView.as_view(), name="update_delete"),
    path('like/<int:article_id>/', ToggleArticle.as_view(), name="like_article"),
    path('search/<int:article_id>/', SingleArticle.as_view(), name="specific_article")
]
