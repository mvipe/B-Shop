from django.urls import path
from . import views



urlpatterns = [
    path("",views.getRoutes,name="routes"),
    path("products/",views.getProducts,name="products"),
    path("user/profile/",views.getUserProfile,name="users-profile"),
    path("users/",views.getUsers,name="users"),
    path("product/<str:pk>",views.getProduct,name="product"),

    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    
]
