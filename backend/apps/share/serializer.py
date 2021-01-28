from rest_framework import serializers
from apps.share.models import Share


class ShareSerializer(serializers.ModelSerializer):
    # share_counter = serializers.SerializerMethodField()
    #
    # def get_share_counter(self, obj):
    #     return obj.liked_by.all().count()

    class Meta:
        model = Share
        fields = '__all__'
