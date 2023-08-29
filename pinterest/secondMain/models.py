from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Kategori(models.Model):
    isim = models.CharField(max_length=100)

    def __str__(self):
        return self.isim

class Resim(models.Model):
    kullanici = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    baslik = models.TextField(max_length=250, verbose_name='Resim Başlığı')
    kategori = models.ManyToManyField(Kategori)
    aciklama = models.TextField(max_length=2000, blank=True, verbose_name='Resim Açıklaması')
    resim = models.FileField(upload_to = 'Resimler/', null = True , verbose_name='Resim Yükle')

    def __str__(self):
        return self.baslik