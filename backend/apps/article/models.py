from django.conf import settings
from django.db import models

from apps.article_category.models import ArticleCategory


class Article(models.Model):
    content = models.TextField()
    title = models.CharField(max_length=50, blank=False, null=True)
    article_category = models.ForeignKey(to=ArticleCategory, related_name='article',
                                         blank=False, null=True, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='user_article',
                             on_delete=models.SET_NULL, null=True, blank=True)
    liked_by = models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='liked by',
                                      related_name='liked_article', blank=True)

    def __str__(self):
        return f'Article {self.title} by {self.user.username}'
