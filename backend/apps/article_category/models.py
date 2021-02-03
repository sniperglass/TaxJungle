from django.db import models


class ArticleCategory(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.category}'
