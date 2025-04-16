from django.urls import path
from .views import *

urlpatterns = [
    path('gestores', GestorViewSet.as_view()),
    path('gestor/<int:pk>', GestorDetail.as_view()),
    path('funcionarios', CadastroViewSet.as_view()),
    path('funcionario/<int:pk>', CadastroDetail.as_view()),
]
