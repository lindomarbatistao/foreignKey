from rest_framework import viewsets
from .models import Gestor, CadastroFuncionario
from .serializers import GestorSerializer, CadastroFuncionarioSerializer
from rest_framework.generics import RetrieveDestroyAPIView, ListCreateAPIView

class GestorViewSet(ListCreateAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class GestorDetail(RetrieveDestroyAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class CadastroViewSet(ListCreateAPIView):
    queryset = CadastroFuncionario.objects.all()
    serializer_class = CadastroFuncionarioSerializer

class CadastroDetail(RetrieveDestroyAPIView):
    queryset = CadastroFuncionario.objects.all()
    serializer_class = CadastroFuncionarioSerializer
