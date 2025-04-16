from django.db import models

class Gestor(models.Model):
    gestor = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    area = models.CharField(max_length=255)
    telefone = models.CharField(max_length=255)

class CadastroFuncionario(models.Model):
    sn = models.CharField(max_length=255)
    funcionario = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    telefone = models.CharField(max_length=255)
    gestor = models.ForeignKey(Gestor, on_delete=models.CASCADE)
    