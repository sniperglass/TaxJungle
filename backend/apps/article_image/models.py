from django.db import models
from apps.article.models import Article


def user_directory_path(instance, filename):
    return f'{instance.image}/{filename}'


class ArticleImage(models.Model):
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    article_image = models.ForeignKey(to=Article, related_name='article_image',
                                      blank=False, null=True, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.article_image}'
