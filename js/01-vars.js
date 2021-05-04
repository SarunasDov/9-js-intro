
/*

INICIAVIMO BUDAS(keiciamumas ir scope):
const - nekeiciama reiksme
let - keiciama reiksme
var - keiciama reiksme

KINTAMUJU TIPAI:
number (skaicius)
string (tekstas)
boolean (logine reiksme)
array (sarasas, masyvus, matrica)
object (objektas)
null (reiksme kuri neegzistuoja, bet yra)
undefined (neaapibrezta)


map
set

*/

const metai = 2021;
console.log(metai);

const vardas = 'Vardenis';
console.log(vardas);

const arSninga = false;
console.log('Ar sninga:', arSninga);

const arTeigiama = true;
console.log('Ar teigiama:', arTeigiama);

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
console.log(zodynas);

const petras = {
    vardas: 'Petras',
    amzius: 99,
    gyvenamojiVieta: 'Gatve g. 1-3, Miestas',
    vaikai: [
        {
            vardas: 'Onute',
            amzius: 67
        }
    ]
};
console.log(petras);