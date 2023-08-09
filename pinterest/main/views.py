from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
# kullanıcı girişi-çıkışı için importlar
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def index(request):
    # register
    if request.method == 'POST':
        kullanici = request.POST['kullanici']
        email = request.POST['email']
        sifre1 = request.POST['sifre1']
        sifre2 = request.POST['sifre2']
        if sifre1 == sifre2:
            if User.objects.filter(username = kullanici).exists():
                messages.error(request, 'Kullanıcı Adı Kullanımda !')
            elif User.objects.filter(email = email).exists():
                messages.error(request,'Email Kullanımda !')
            elif len(sifre1) < 6:
                messages.error(request, 'Şifre En Az 6 Karakter Olmalıdır !')
            elif kullanici.lower() in sifre1.lower():
                messages.error(request, 'Kullanıcı Adı ve Şifre Aynı Olmamalıdır')
            else:
                user = User.objects.create_user(
                    username = kullanici,
                    email = email,
                    password = sifre1
                )
                user.save()
                messages.success(request,'Kayıt tamamlandı. Giriş Yapabilirsiniz.')
                    
        else:
            messages.error(request,'Şifreler Eşleşmiyor !')
# Kullanıcı Girişi Fonksiyonu   


            
    return render (request, 'index.html')

# veritabanında şifre ve email doğru olmasına rağmen hata veriyor incelenicek