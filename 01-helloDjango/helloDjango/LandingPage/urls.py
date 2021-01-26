from . import views
from django.urls import path

urlpatterns = [
    path('', views.queryParams),
    path('cep/<str:cep>', views.GetDataOfCepPath),
    path('cep', views.GetDataOfCepQuery)
]