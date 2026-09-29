let prompt = require('prompt-sync')();
const candidats = [
    {
        cin: "AH123456",
        nom: "amrani",
        prenom: "amina",
        partiPolitique: "Independant",
        age: 26,
        electeurs: []
    },
    {
        cin: "AB123456",
        nom: "boushaba",
        prenom: "Soufiane",
        partiPolitique: "Independant",
        age: 40,
        electeurs: []
    },
    {
        cin: "EB141312",
        nom: "erraji",
        prenom: "said",
        partiPolitique: "RNI",
        age: 30,
        electeurs: ["AH123456","AB123456"]
    },
    {
        cin: "EB121314",
        nom: "rami",
        prenom: "karima",
        partiPolitique: "Independant",
        age: 20,
        electeurs: []
    },
    {
        cin: "ER246810",
        nom: "saaidi",
        prenom: "mohammed",
        partiPolitique: "RNI",
        age: 28,
        electeurs: ["EB121314", "HA123456"]
    },
    {
        cin: "CC121416",
        nom: "tazarini",
        prenom: "aziza",
        partiPolitique: "PI",
        age: 26,
        electeurs: []
    },
    {
        cin: "HA123456",
        nom: "tazarini",
        prenom: "fouzia",
        partiPolitique: "Independant",
        age: 36,
        electeurs: []
    },
    {
        cin: "AH165897",
        nom: "zendagi",
        prenom: "saad",
        partiPolitique: "PJD",
        age: 25,
        electeurs: ["AB124681",]
    },
    {
        cin: "ER212223",
        nom: "tahour",
        prenom: "youssef",
        partiPolitique: "Independant",
        age: 34,
        electeurs: []
    },
    {
        cin: "AB124681",
        nom: "lamine",
        prenom: "fatima ezzahra",
        partiPolitique: "Independant",
        age: 26,
        electeurs: []
    },
    {
        cin: "AC124512",
        nom: "boudali",
        prenom: "marouane",
        partiPolitique: "Independant",
        age: 25,
        electeurs: []
    },
    {
        cin: "ZA212020",
        nom: "bennani",
        prenom: "rayan",
        partiPolitique: "RNI",
        age: 26,
        electeurs: ["ER212223"]
    }];

function Ajoutercandidat() {
    const cin = prompt("Entrer candidat CIN: ");
    const nom = prompt("Enter candidat nom: ");
    const prenom = prompt("Enter candidat prenom: ");
    const partiPolitique = prompt("Enter partiPolitique: ");
    const age = Number(prompt("Enter candidat age: "));

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(candidat);
    console.log("Candidat ajoute avec succés");
}

function Ajouterplusieurs() {
    let nombre = Number(prompt("Entrer nombre de candidats :"));

    for (let i = 0; i < nombre; i++) {
        
        let cin = prompt("Entrer CIN : ");
        let nom = prompt(" Entrer nom: ");
        let prenom = prompt("Entrer prenom: ");
        let partiPolitique =prompt("Entrer partiPolitique: ");
        let age = Number(prompt( "Entrer age :"));
        let candidat = {
            cin,
            nom,
            prenom,
            partiPolitique,
             age,
            electeurs: []
        };
        candidats.push(candidat);
    }
        console.log("\n Nouveau candidats ajoutes");
        
}
function afficherCandidats() {

    console.log("1 : Trier les candidats par nombre de votes");
    console.log("2 : Filtrer par partiPolitique");

    let choix = Number(prompt("Choix : "));

    if (choix === 1) {

        for (let i = 0; i < candidats.length; i++) {
            for (let j = i + 1; j < candidats.length; j++) {

                if (candidats[i].electeurs.length < candidats[j].electeurs.length) {

                    let temp = candidats[i];
                    candidats[i] = candidats[j];
                    candidats[j] = temp;
                }
            }
        }

        for (let i = 0; i < candidats.length; i++) {
            console.log("\nCandidat " + (i + 1) + " :");
            console.log("  CIN   : " + candidats[i].cin);
            console.log("  Nom   : " + candidats[i].nom);
            console.log("  Votes : " + candidats[i].electeurs.length);
        }

    } else if (choix === 2) {

        let parti = prompt("Entrez le parti : ");
        let filtres = [];

        for (let i = 0; i < candidats.length; i++) {

            if (candidats[i].partiPolitique === parti) {
                filtres.push(candidats[i]);
            }
        }

        if (filtres.length === 0) {
            console.log("Aucun candidat pour ce parti.");
        } else {

            for (let i = 0; i < filtres.length; i++) {
                console.log("\nCandidat " + (i + 1) + " :");
                console.log("  CIN   : " + filtres[i].cin);
                console.log("  Nom   : " + filtres[i].nom);
                console.log("  Parti : " + filtres[i].partiPolitique);
                console.log("  Votes : " + filtres[i].electeurs.length);
            }
        }

    } else {
        console.log("Choix invalide.");
    }
}







        
    

 



 