from rest_framework import serializers
from apps.article_video.models import ArticleVideo


class ArticleVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleVideo
        fields = '__all__'
