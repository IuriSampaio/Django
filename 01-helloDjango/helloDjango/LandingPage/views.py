from django.shortcuts import render
from django.http import HttpResponse
import requests

POSTMON_URL = 'https://api.postmon.com.br/v1/cep/'

def queryParams( request ):
    return render(request, 'pages/input.html')

def GetDataOfCepQuery( request ):
    cepQuery = request.GET.get('cep')

    data = requests.get(POSTMON_URL+cepQuery)

    return render(request , 'pages/cepFound.html' , {'cepData':data.text}) if data.status_code == 200 else render(request, 'err/notFound.html', {'data':cepQuery})

def GetDataOfCepPath( request , cep ):
    data = requests.get(POSTMON_URL+cep)

    return render(request , 'pages/cepFound.html' , {'cepData':data.text}) if data.status_code == 200 else render(request, 'err/notFound.html', {'data':cep})