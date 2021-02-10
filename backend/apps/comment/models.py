from django.db import models
from django.contrib.auth import get_user_model
from apps.article.models import Article

User = get_user_model()


class Comment(models.Model):
    content = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey(to=Article, related_name="comment", on_delete=models.CASCADE)
    user = models.ForeignKey(to=User, related_name='user_comment', on_delete=models.CASCADE)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return f'Comment {self.content} by {self.user.username}'
