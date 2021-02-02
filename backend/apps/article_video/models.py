from django.db import models
from apps.article.models import Article


class ArticleVideo(models.Model):
    video = models.URLField(max_length=150, blank=True, null=True)
    article_video = models.ForeignKey(to=Article, related_name='article_video',
                                      blank=True, null=True, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.article_video}'
