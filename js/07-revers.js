/*

Duotas array su tekstinemis reiksmemis (string)
Reikia sujungti juos atbulai iterpiant ", "

*/


// labas, rytas, tau, sakau
const d = ['sakau', 'tau', 'rytas', 'labas'];
let reverse = '';

reverse += d[3];
reverse += ', ';
reverse += d[2];
reverse += ', ';
reverse += d[1];
reverse += ', ';
reverse += d[0];

console.log(reverse);