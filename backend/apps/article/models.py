from django.conf import settings
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Article(models.Model):
    content = models.CharField(max_length=3000)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='user_article', on_delete=models.SET_NULL, null=True)
    liked_by = models.ManyToManyField(to=User, verbose_name='liked by', related_name='liked_article', blank=True)

    def __str__(self):
        return f'Post {self.pk} by {self.user}'
