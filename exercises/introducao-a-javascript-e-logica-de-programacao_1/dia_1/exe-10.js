let custoProduto = 2;
let valorVenda = 3;

if (custoProduto >= 0 && valorVenda >= 0) {
    let totalCustoProduto = custoProduto * 1.2;
    let totalLucro = (valorVenda - totalCustoProduto) * 1000;
    console.log(totalLucro);
} else {
    console.log('[ERRO] - Os valores não poder ser negativos');
};
