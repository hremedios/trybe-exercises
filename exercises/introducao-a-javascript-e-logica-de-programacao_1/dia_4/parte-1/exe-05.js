let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim',
};

for (let properties in info) {
    if (
        info[properties] === info.recorrente &&
        info[properties] === 'Sim' &&
        info[properties] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[properties] + ' e ' + info2[properties]);
    }
}