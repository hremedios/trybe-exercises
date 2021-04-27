let a = 8;
let b = 7;
let c = 9;

if (a < b + c && b < a + c && c < a + b ) {
    console.log('TRUE');
} else if (a > b + c && b > a + c && c > a + b ) {
    console.log('FALSE');
} else {
    console.log('[ERRO] Valor(es) invalodo(s)');
};



