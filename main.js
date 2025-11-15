let bici = [{
             modello:'Pinarello',
             peso: 7,
},
{
             modello:'Factor',
             peso: 8,
},
{
             modello:'Scott',
             peso: 10,
}];


let biciPiuLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bici[i];
    }
}

console.log("La bici più leggera è:", biciPiuLeggera.modello, biciPiuLeggera.peso + "kg");