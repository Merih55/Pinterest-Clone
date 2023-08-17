from django.shortcuts import render
from django.contrib.auth import logout
# Create your views here.
def anasayfa(request):

    return render(request,'main.html')

def created(request):

    return render(request,'olustur.html')
