from django.shortcuts import render
from .models import *
# Create your views here.
def anasayfa(request):
    resimler = Resim.objects.all
    context = {
        'resimler':resimler, 
    }
    return render(request,'main.html',context)

def created(request):
    if request.method == 'POST':
        baslik = request.POST['baslik']
        aciklama = request.POST['aciklama']
        resim = request.FILES['resim']
        kategori_id = request.POST['kategori']

        kategori = Kategori.objects.get(pk=kategori_id)

        resim = Resim(baslik=baslik, aciklama=aciklama, resim=resim)

        resim.save()
        resim.kategori.set([kategori])
    return render(request,'olustur.html')
