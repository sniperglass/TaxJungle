from django.db import models
from django.contrib.auth import get_user_model
from apps.article.models import Article
from apps.social_network.models import SocialNetwork

User = get_user_model()


class Share(models.Model):
    social_network = models.ForeignKey(to=SocialNetwork, related_name='share', null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(to=User, related_name='user_share', blank=True, on_delete=models.CASCADE)
    article = models.ForeignKey(to=Article, related_name='article_share',
                                blank=True, null=True, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Article {self.article} shared by {self.user.username}'
