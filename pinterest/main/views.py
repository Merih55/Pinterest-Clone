from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
# kullanıcı girişi-çıkışı için importlar
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def index(request):
    if request.method == 'POST':
        email = request.POST['email']
        sifre = request.POST['sifre']

        user = authenticate(request, email = email, password = sifre)

        if user is not None:
            login(request, user)
            messages.success(request,'Giriş Yapıldı')
            return redirect('login')
        else:
            messages.error(request,'Kullanıcı Adı veya Şifre Hatalı')
            return redirect('index')
    return render (request, 'index.html')

# veritabanında şifre ve email doğru olmasına rağmen hata veriyor incelenicek