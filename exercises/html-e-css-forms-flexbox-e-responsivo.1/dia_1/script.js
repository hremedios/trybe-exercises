function adicionandoEstados() {
    
    let selecioandoEstados = document.getElementById('estados');
    let opcaoEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];


    for (index= 0; index < opcaoEstados.length; index += 1) {
        estado = opcaoEstados[index]
    
     let option = document.createElement('option');
        option.value = estado;
        option.text = estado;
        selecioandoEstados.appendChild(option);
    };
};

adicionandoEstados();