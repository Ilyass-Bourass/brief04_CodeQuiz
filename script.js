
const quizData = [
    {
        id: 1,
        type: 'text',
        question: 'Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?',
        correctAnswer: ['push', 'push()', '.push', '.push()'],
        explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d’un tableau.'
      },
    {
      id: 2,
      type: 'mcq',
      question: 'Quelle méthode JavaScript permet de filtrer les éléments dun tableau ?',
      options: ['map()', 'filter()', 'reduce()', 'forEach()'],
      correctAnswer: 1,
      explanation: 'filter() crée un nouveau tableau avec les éléments qui passent le test.'
    },
    {
      id: 3,
      type: 'boolean',
      question: 'Le JavaScript est-il un langage synchrone par défaut ?',
      options: ['vraix', 'faux'],
      correctAnswer: 1,
      explanation: 'JavaScript est monothread mais asynchrone.'
    },
    
   
    {
      id: 4,
      type: 'text',
      question: 'Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?',
      correctAnswer: ['push', 'push()', '.push', '.push()'],
      explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d’un tableau.'
    }      
  ];

  let barProgression=document.getElementById("progressBar");
  let btn_progress=document.querySelector(".btn_progress");
  
  
  let pourcentageBarre=100/quizData.length;
  
  function fonction_augment_Bar(){
      barProgression.style.width=`${pourcentageBarre}%`;
      pourcentageBarre+=100/quizData.length;
  }
  
let miuteur; // Déclare miuteur en dehors de la fonction pour un accès global

function demarrerMinuteur(){
    const elementTemps = document.getElementById("time");
    let tempsRestant = 10;
    elementTemps.textContent = tempsRestant + "s"; 
    
    function decrementerTemps(){
        if(tempsRestant > 0){
            tempsRestant--;
            elementTemps.textContent = tempsRestant + "s"; 
        } else {
            clearInterval(miuteur); // Arrête le minuteur quand le temps est écoulé
            suivanteQuestion(); // Passe à la question suivante
        }
    }

    clearInterval(miuteur); // Assure que tout ancien intervalle est supprimé
    miuteur = setInterval(decrementerTemps, 1000); // Démarre un nouveau minuteur
}


let indiceQuestionActuelle = 0; // Indice de la question en cours
let score=0;
const spanScore=document.querySelector("#score");

function afficherQuestion() {
    demarrerMinuteur();
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

                const boutonValiderReponseClone = boutonValiderReponse.cloneNode(true);
                boutonValiderReponse.parentNode.replaceChild(boutonValiderReponseClone, boutonValiderReponse);
            
                boutonValiderReponseClone.addEventListener("click", () => {

                    if (champDeSaisie.value.trim() === '') {
                        alert("Le champ doit contenir du texte !");
                        return; 
                    }
                

                    textTrouve = questionActuelle.correctAnswer.includes(champDeSaisie.value.trim());
                
                    if (textTrouve) {
                        boutonValiderReponseClone.style.backgroundColor = "green";
                        champDeSaisie.style.backgroundColor = "green";
                        score++;
                        spanScore.textContent=score;
                    } else {
                        boutonValiderReponseClone.style.backgroundColor = "red";
                        champDeSaisie.style.backgroundColor = "red";
                    }
                    boutonValiderReponseClone.disabled = true;
                

                    setTimeout(() => {
                        boutonValiderReponseClone.disabled = false;
                        boutonValiderReponseClone.style.backgroundColor = "";
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
    boutons.forEach(botton=>{
        botton.disabled="true"
    });
   setTimeout(suivanteQuestion,1000);
}

function suivanteQuestion() {
    indiceQuestionActuelle++;


    if (indiceQuestionActuelle >= quizData.length) {
        fonction_augment_Bar();
        
        setTimeout(() => {
            alert("Votre score est : " + score + "/" + quizData.length); 
        }, 500);
        return;
    }


    fonction_augment_Bar(); 
    afficherQuestion(); 
}

afficherQuestion();
