from django.db import models


class SocialNetwork(models.Model):
    social_network = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f'{self.social_network}'
