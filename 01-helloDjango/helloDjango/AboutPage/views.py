from django.shortcuts import render
from django.http import HttpResponse

def helloWorld(request):
    return HttpResponse("{res:'json'}")

def usingTemplates(request):
    return render( request , 'index.html' ) # vai procurar os arquivos html na pasta templates

def pathParams(request, name):
    return render( request , 'about/index.html', {'name': name})