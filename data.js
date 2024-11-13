const quizeSData=[
    {
        "title": "Football",
        "categorie": "Sport",
        "tempsEstime": 10,
        "Niveau": "Facile",
        "questions": [
            {
                "id": 1,
                "type": "mcq",
                "question": "Quel joueur a remporté le plus de Ballons d'Or ?",
                "options": ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Diego Maradona"],
                "correctAnswer": 0,
                "explication":"Explication : messi est le mailleur joueur du monde"
            },
            {
                "id": 2,
                "type": "text",
                "question": "Quel pays a remporté la Coupe du Monde 2018 ?",
                "correctAnswer": ["France","france","FRANCE"],
                "explication":"Explication : la france qui reporte le la Coupe du Monde 2018 "
                
            },
            {
                "id": 3,
                "type": "mcq",
                "question": "Combien de joueurs y a-t-il dans une équipe de football ?",
                "options": ["10", "11", "12", "9"],
                "correctAnswer": 1,
                "explication":"Explication : le nombre de joueurs dans une équipe de football est 11 "
            }
        ]
    }, 
    {
        "title": "JavaScript Basics",
        "categorie": "IT",
        "tempsEstime": 10,
        "Niveau": "Facile",
        "questions": [
            {
                "id": 1,
                "type": "mcq",
                "question": "Quel est le type de données de la variable 'let x = 5;' ?",
                "options": ["String", "Number", "Boolean", "Object"],
                "correctAnswer": 1,
                "explication":"Explication : cette declaration let x = 5 est d un nombre"
            },
            {
                "id": 2,
                "type": "boolean",
                "question": "JavaScript est un langage compilé.",
                "options": ["vrai", "faux"],
                "correctAnswer": 1,
                "explication":"Explication :javascript n est pas un language complé"
            },
            {
                "id": 3,
                "type": "mcq",
                "question": "Quel est le résultat de '5 + '5' ?'",
                "options": ["10", "'55'", "Erreur", "undefined"],
                "correctAnswer": 1,
                "explication":"Explication :dans cette exepmle il va faire une concatétination"
            }
        ]
    },
    {
        "title": "Art Moderne",
        "categorie": "Culture",
        "tempsEstime": 12,
        "Niveau": "Difficile",
        "questions": [
            {
                "id": 1,
                "type": "mcq",
                "question": "Quel artiste est associé au mouvement cubiste ?",
                "options": ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
                "correctAnswer": 0
            },
            {
                "id": 2,
                "type": "text",
                "question": "Quel artiste a peint le tableau 'Guernica' ?",
                "correctAnswer": ["Pablo Picasso"]
            },
            {
                "id": 3,
                "type": "mcq",
                "question": "Quel est le style de l'art de Jackson Pollock ?",
                "options": ["Abstraction", "Cubisme", "Surréalisme", "Renaissance"],
                "correctAnswer": 0
            }
        ]
    }
]

localStorage.setItem("quizeSData",JSON.stringify(quizeSData));
