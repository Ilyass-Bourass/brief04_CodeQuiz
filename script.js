
const quizData = [
    {
      id: 1,
      type: 'mcq',
      question: 'Quelle méthode JavaScript permet de filtrer les éléments dun tableau ?',
      options: ['map()', 'filter()', 'reduce()', 'forEach()'],
      correctAnswer: 1,
      explanation: 'filter() crée un nouveau tableau avec les éléments qui passent le test.'
    },
    {
      id: 2,
      type: 'boolean',
      question: 'Le JavaScript est-il un langage synchrone par défaut ?',
      options: ['vraix', 'faux'],
      correctAnswer: 1,
      explanation: 'JavaScript est monothread mais asynchrone.'
    },
    {
      id: 3,
      type: 'text',
      question: 'Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?',
      correctAnswer: ['push', 'push()', '.push', '.push()'],
      explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d’un tableau.'
    },
    {
      id: 3,
      type: 'text',
      question: 'Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?',
      correctAnswer: ['push', 'push()', '.push', '.push()'],
      explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d’un tableau.'
    } 

       
  ];
  

let indiceQuestionActuelle = 0; // Indice de la question en cours
let score=0;
const spanScore=document.querySelector("#score");
function afficherQuestion() {
    const zoneTous=document.querySelector(".question_area");
    const zoneOptions = document.querySelector(".question_area .options");
    const zoneQuestion = document.querySelector(".question_area h2");

    const zoneChoixMultiple=document.querySelector(".multiple-choice");

    const zonevraiFaux=document.querySelector(".vf-question");
    const zoneOptionsVF = document.querySelector(".vf-question .options");
    const zoneQuestionVF = document.querySelector(".vf-question h2");


    const zoneQuestionInput = document.querySelector(".input-question");
    const titreQuestionInput = zoneQuestionInput.querySelector("h2");
    const champDeSaisie = zoneQuestionInput.querySelector(".answer-input");
    const boutonValiderReponse = zoneQuestionInput.querySelector(".submit-answer");

    const questionActuelle = quizData[indiceQuestionActuelle];

    
    

    const nombreQuestion=document.querySelector("#question-number");
    nombreQuestion.textContent=indiceQuestionActuelle+1;

    const nombreTotalQuestion=document.querySelector(".question-progress strong");
    nombreTotalQuestion.textContent=quizData.length;

    zoneTous.style.display = "none";
    zoneChoixMultiple.style.display = "none";
    zonevraiFaux.style.display = "none";
    zoneQuestionInput.style.display = "none";
    

    switch (questionActuelle.type) {
        case 'mcq':
            zoneChoixMultiple.style.display = "block";

            zoneQuestion.textContent = questionActuelle.question;
            zoneOptions.innerHTML = '';

            questionActuelle.options.forEach((option, index) => {
            const bouton = document.createElement("button");
            bouton.textContent = option;
        
            bouton.addEventListener("click", () => verifierReponse(index));    
            zoneOptions.appendChild(bouton);
            });

            break;
    
        case 'boolean':
            zonevraiFaux.style.display = "block";

            zoneQuestionVF.textContent = questionActuelle.question;
            zoneOptionsVF.innerHTML = '';

            questionActuelle.options.forEach((option, index) => {
            const bouton = document.createElement("button");
            bouton.textContent = option;
        
            bouton.addEventListener("click", () => verifierReponse(index));    
            zoneOptionsVF.appendChild(bouton);
            });
            break;
    
            case 'text':
                let textTrouve = false;
                zoneQuestionInput.style.display = "block";
                titreQuestionInput.textContent = questionActuelle.question;

            
                boutonValiderReponse.addEventListener("click", () => {

                    if (champDeSaisie.value.trim() === '') {
                        alert("Le champ doit contenir du texte !");
                        return; 
                    }
                

                    textTrouve = questionActuelle.correctAnswer.includes(champDeSaisie.value.trim());
                
                    if (textTrouve) {
                        boutonValiderReponse.style.backgroundColor = "green";
                        champDeSaisie.style.backgroundColor = "green";
                        score++;
                        spanScore.textContent=score;
                    } else {
                        boutonValiderReponse.style.backgroundColor = "red";
                        champDeSaisie.style.backgroundColor = "red";
                    }
                    boutonValiderReponse.disabled = true;
                

                    setTimeout(() => {
                        boutonValiderReponse.disabled = false;
                        boutonValiderReponse.style.backgroundColor = "";
                        champDeSaisie.style.backgroundColor = "";
                        champDeSaisie.value = "";
                        suivanteQuestion();
                    }, 1000);
                });
                
                break;
            
    
        default:
            console.log("Type de question inconnu");
    }
        
}

function verifierReponse(indiceReponse) {
    const questionActuelle = quizData[indiceQuestionActuelle];
    const options = questionActuelle.type === 'boolean' 
                        ? document.querySelector(".vf-question .options") 
                        : document.querySelector(".multiple-choice .options")

    const boutons = options.querySelectorAll(" button");
    const bonneReponse = questionActuelle.correctAnswer;

    // Réinitialiser tous les boutons en blanc
    boutons.forEach(bouton => bouton.style.backgroundColor = "#F2E6E6");

    // Colorier le bouton en fonction de la réponse
    if (indiceReponse === bonneReponse) {
        boutons[indiceReponse].style.backgroundColor = 'green';
        score++;
        spanScore.textContent=score;
    } else {
        boutons[indiceReponse].style.backgroundColor = 'red';
        boutons[bonneReponse].style.backgroundColor = 'green';
    }
   setTimeout(suivanteQuestion,1000);
}

function suivanteQuestion(){
    indiceQuestionActuelle++;
    if(indiceQuestionActuelle>=quizData.length){
        alert("Votre score est : "+score+"/"+indiceQuestionActuelle);
    }
    else{
        afficherQuestion();
    }
        
}

// Afficher la première question lors du chargement
afficherQuestion();
