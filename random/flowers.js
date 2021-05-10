/*

uzduotis:
- duodama, kiek turiu geliu
- duodama, kiek viena gele "susilaukia" nauju gelyciu
- duodama, kiek turiu vazonu
- reikia rasti, keliu vazonu truksta?

*/

/*

function flowers(pradinesGeles, reprodukcija, turimiVazonai) {
    const visoGeliu = (reprodukcija + 1) * pradinesGeles;
    const reikiaVazonu = visoGeliu - turimiVazonai;
    return > 0 ? reikiavazonu;
}


*/


function flowers(geles, vaikai, vazonai) {
    console.log(geles);

    let visoGeliu = geles * vaikai + geles;
    
    const reikiaVazonu = visoGeliu - vazonai;
    if (reikiaVazonu < 0) {
        return 0;
        
    }
    return reikiaVazonu;
}

console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);
console.log(flowers(0, 200, 1), '->', 0);
console.log(flowers(10, 0, 10), '->', 0);