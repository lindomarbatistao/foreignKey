from rest_framework import serializers
from .models import Gestor, CadastroFuncionario

class GestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestor
        fields = '__all__'

class CadastroFuncionarioSerializer(serializers.ModelSerializer):
    gestor = GestorSerializer(read_only=True)
    gestor_id = serializers.PrimaryKeyRelatedField(
        queryset=Gestor.objects.all(), source='gestor', write_only=True
    )

    class Meta:
        model = CadastroFuncionario
        fields = ['id', 'sn', 'funcionario', 'email', 'telefone', 'gestor', 'gestor_id']




# gestor → Vai mostrar os dados completos do gestor relacionado quando for consultar.

# gestor_id → É o campo que você usa para enviar o ID no POST ou PUT.

# fields = ['id', 'sn', 'funcionario', 'email', 'telefone', 'gestor', 'gestor_id'] → Isso deixa claro que na listagem aparece o objeto completo, e no envio basta passar o ID.