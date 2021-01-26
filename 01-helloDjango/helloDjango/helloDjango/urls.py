from django.urls import path, include

urlpatterns = [ 
    path('',include('LandingPage.urls')),
    path('about/', include('AboutPage.urls')),
]
