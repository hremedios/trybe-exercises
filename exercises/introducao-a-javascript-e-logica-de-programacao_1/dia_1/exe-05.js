let a = 5;
let b = 5;
let c = 5;

if (a < b + c && b < a + c && c < a + b ) {
    console.log('TRUE');
} else if (a > b + c && b > a + c && c > a + b ) {
    console.log('FALSE');
} else {
    console.log('[ERRO] Valor(es) invalodo(s)');
};



