from rest_framework import serializers
from apps.article_image.models import ArticleImage


class ArticleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleImage
        fields = '__all__'
