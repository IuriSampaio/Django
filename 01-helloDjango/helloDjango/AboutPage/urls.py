from . import views
from django.urls import path

urlpatterns = [
    path('', views.helloWorld),
    path('', views.usingTemplates),
    path('<str:name>', views.pathParams)
]
