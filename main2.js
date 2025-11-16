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


for (let i = 0; i < squadre.length; i++) {
    const selezioneSquadre = squadre[i];
    let falliRandom = Math.floor(Math.random() * 150) + 1;
    selezioneSquadre.falliSubiti = falliRandom
    let puntiRandom = Math.floor(Math.random() * 90) + 1;
    selezioneSquadre.puntiFatti = puntiRandom
}



