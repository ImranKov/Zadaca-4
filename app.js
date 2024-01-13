//zadatak 3
function ispisiRijec(rijec) {
    console.log("Vaša riječ za pretragu je: " + rijec);
}

ispisiRijec("polica");

//Opcionalni zadatak
function ispisiParneBrojeve(broj) {
    if (broj === 2) {
        console.log(broj);
        return;
    }
    if (broj % 2 === 0) {
        console.log(broj);
    }
    ispisiParneBrojeve(broj - 2);
}

ispisiParneBrojeve(10);