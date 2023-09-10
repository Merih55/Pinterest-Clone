from django.shortcuts import render,redirect
from .models import *
from django.db.models import Q
from django.contrib.auth.decorators import login_required
# Create your views here.
def anasayfa(request):
    resimler = Resim.objects.all
    # search
    search = ''
    if request.GET.get('search'):
        search  = request.GET.get('search')
        resimler = Resim.objects.filter(
            Q(baslik__icontains = search) |
            Q(kategori__isim__icontains = search)
        )
    context = {
        'resimler':resimler,
        'search':search 
    }

    return render(request,'main.html',context)

def created(request):
    # search
    resimler = Resim.objects.all
    search = ''
    if request.GET.get('search'):
        search  = request.GET.get('search')
        resimler = Resim.objects.filter(
            Q(baslik__icontains = search) |
            Q(kategori__isim__icontains = search)
        )
    

    if request.method == 'POST':
        baslik = request.POST['baslik']
        aciklama = request.POST['aciklama']
        resim = request.FILES['resim']
        kategori_id = request.POST['kategori']
        # Oturum açmış kullanıcının bilgilerine erişiyoruz
        kullanici = request.user
        kategori = Kategori.objects.get(pk=kategori_id)
        resim = Resim(kullanici=kullanici, baslik=baslik, aciklama=aciklama, resim=resim)
        resim.save()
        resim.kategori.set([kategori])

    context = {
        'resimler':resimler,
        'search':search 
    }
    return render(request,'olustur.html',context)

def detay(request, ResimDetayId):
    # search
    resimler = Resim.objects.all
    search = ''
    if request.GET.get('search'):
        search  = request.GET.get('search')
        resimler = Resim.objects.filter(
            Q(baslik__icontains = search) |
            Q(kategori__isim__icontains = search)
        )
    Resimler = Resim.objects.get(id = ResimDetayId)
    BenzerResim = Resim.objects.all
    context = {
        'Resimler':Resimler,
        'BenzerResim':BenzerResim,
        'resimler':resimler,
        'search':search 
    }
    return render(request,'resim-detay.html',context)

def profil(request):
    # Giriş yapan kullanıcının oluşturduğu resimleri görüntülemek için
    resimler = Resim.objects.filter(kullanici=request.user)
    context = {
        'resimler':resimler,
        }
    return render(request,'profil.html',context)
