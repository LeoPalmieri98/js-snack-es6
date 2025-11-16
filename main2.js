// Dati da elaborare
let squadre = [
    {
        squadra: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Genera numeri random e aggiorna gli oggetti
for (let i = 0; i < squadre.length; i++) {
    const selezioneSquadre = squadre[i];
    let falliRandom = Math.floor(Math.random() * 150) + 1;
    selezioneSquadre.falliSubiti = falliRandom
    let puntiRandom = Math.floor(Math.random() * 90) + 1;
    selezioneSquadre.puntiFatti = puntiRandom
}


// Crea nuovo array con solo i nomi
let nomiSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    const nome = squadre[i].squadra;
    nomiSquadre.push(nome);
}

// Stampa in console
console.log("Squadre con valori random:", squadre);
console.log("Solo nomi delle squadre:", nomiSquadre);
