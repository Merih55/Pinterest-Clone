from django.shortcuts import render
from django.contrib.auth import logout
# Create your views here.
def secondMain(request):

    return render(request,'secondMain.html')
