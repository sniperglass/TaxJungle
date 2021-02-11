from rest_framework import serializers
from apps.article.models import Article
from apps.user.serializer import UserSerializer
from apps.article_category.serializer import ArticleCategorySerializer
from apps.article_image.serializer import ArticleImageSerializer
from apps.article_video.serializer import ArticleVideoSerializer
from apps.comment.serializer import CommentSerializer


class ArticleSerializer(serializers.ModelSerializer):
    amount_of_likes = serializers.SerializerMethodField()
    share_counter = serializers.SerializerMethodField()
    user = UserSerializer(read_only=True)
    article_category = ArticleCategorySerializer(read_only=True)
    article_image = ArticleImageSerializer(read_only=True, many=True)
    article_video = ArticleVideoSerializer(read_only=True, many=True)
    comment = CommentSerializer(read_only=True, many=True)

    def get_share_counter(self, obj):
        return obj.article_share.all().count()

    def get_amount_of_likes(self, obj):
        return obj.liked_by.all().count()

    class Meta:
        model = Article
        fields = '__all__'
        # ordering = ['-created']
