from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('',anasayfa,name='main'),
    path('olustur/',created,name='olustur'),
    path('resim-detay/<int:ResimDetayId>',detay,name='detay'),
    path('profil/',profil,name='profil'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)