from rest_framework import serializers

from apps.article.models import Article


class NewArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
