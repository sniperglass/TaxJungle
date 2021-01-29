from django.db import models


class ArticleCategory(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    CATEGORY_CHOICES = [
        (1, 'Choose a Category'),
        (2, 'Taxes'),
        (3, 'Renting'),
        (4, 'Banking'),
        (5, 'Insurance')
    ]
    category = models.IntegerField(choices=CATEGORY_CHOICES, default=1)

    def __str__(self):
        return f'{self.category}'
