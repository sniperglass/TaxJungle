from rest_framework import serializers
from apps.article.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    amount_of_likes = serializers.SerializerMethodField()

    def get_amount_of_likes(self, obj):
        return obj.liked_by.all().count()

    class Meta:
        model = Article
        fields = '__all__'
