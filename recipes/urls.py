from django.urls import include, path
from rest_framework.schemas import get_schema_view

from .views import CategoryView, RecipeView, RecipeDetailView

urlpatterns = [
    path('categories/', CategoryView.as_view()),
    path('recipes/', RecipeView.as_view()),
    path('recipe/<int:pk>', RecipeDetailView.as_view()),
    path('openapi', get_schema_view(
        title="CookBook",
        description="API for CookBook"
    ), name='openapi-schema'),
]
