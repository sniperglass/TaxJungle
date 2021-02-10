from rest_framework import status, filters, pagination
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, \
    GenericAPIView, RetrieveAPIView
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from apps.article.models import Article
from apps.article.serializers.serializer import ArticleSerializer
from apps.article_category.models import ArticleCategory
from apps.article_image.models import ArticleImage
from apps.article_video.models import ArticleVideo


class ArticleCreateView(CreateAPIView):
    """
    Create article by admin only
    """
    serializer_class = ArticleSerializer
    # permission_classes = [IsAdminUser]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        article_category = ArticleCategory.objects.filter(id=request.data['article_category'])[0]
        new_article = serializer.save(article_category=article_category, user=self.request.user)
        uploaded_images = request.FILES.getlist('article_images')
        if uploaded_images:
            for image in uploaded_images:
                article_image = ArticleImage(image=image, article_image=new_article)
                article_image.save()
        if request.data['article_video'] != '':
            article_video = ArticleVideo(video=request.data['article_video'], article_video=new_article)
            article_video.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # uploaded_images = self.context.get('request').FILES.getlist('images')
    # if uploaded_images:
    #     for image in uploaded_images:
    #         article_image = ArticleImage.objects.create(
    #             article_image=article,
    #             image=image
    #         )




class PaginationView(pagination.PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'


class ListArticleView(ListAPIView):
    """
    List of all the articles in chronological order
    """
    serializer_class = ArticleSerializer
    pagination_class = PaginationView
    search_fields = ['content', 'title']
    filter_backends = (filters.SearchFilter,)
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Article.objects.all().order_by("-created")


class UpdateDeleteArticleView(RetrieveUpdateDestroyAPIView):
    """
    Update and Delete Article by admin only
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_url_kwarg = 'article_id'
    permission_classes = [IsAdminUser]


class ToggleArticle(GenericAPIView):
    """
    Like/Dislike Article (patch method)
    """
    queryset = Article
    serializer_class = ArticleSerializer
    lookup_url_kwarg = 'article_id'
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        article = self.get_object()
        user = self.request.user
        user_liked_post = user in article.liked_by.all()
        if user_liked_post:
            article.liked_by.remove(user)
        else:
            article.liked_by.add(user)
        return Response(self.get_serializer(article).data)


class SingleArticle(RetrieveAPIView):
    """
    Get single article
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_url_kwarg = 'article_id'
    permission_classes = [IsAuthenticated]


class ArticleCategoryView(ListAPIView):
    """
    Get article by category
    """
    serializer_class = ArticleSerializer
    lookup_field = 'article_category_id'
    """ pagination_class = PaginationView """
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Article.objects.filter(article_category=self.kwargs['article_category_id'])
