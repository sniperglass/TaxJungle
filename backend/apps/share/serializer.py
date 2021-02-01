from rest_framework import serializers
from apps.share.models import Share
from apps.article.serializer import ArticleSerializer
from apps.user.serializer import UserSerializer


class ShareSerializer(serializers.ModelSerializer):
    #article = ArticleSerializer(read_only=True)
    #user = UserSerializer(read_only=True)
    # share_counter = serializers.SerializerMethodField()
    #
    # def get_share_counter(self, obj):
    #     return obj.article_share.all().count()

    class Meta:
        model = Share
        fields = '__all__'
