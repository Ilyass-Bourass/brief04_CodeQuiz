

const container_quiz_quistion=document.querySelector(".container_ajouterQuiz");
const dashbord_ajouterQuiz=document.querySelector(".ajouterQuiz");
const dashbord_ajouterQuestion=document.querySelector(".ajouterQustion");

const zoneQuiz=document.querySelector(".quiz-section");
const zoneQuestion=document.querySelector(".question-section");

zoneQuiz.style.display="none";
zoneQuestion.style.display="none";
container_quiz_quistion.style.display="none"

dashbord_ajouterQuiz.addEventListener("click",(e)=>{
    zoneQuestion.style.display="none";
    container_quiz_quistion.style.display="block"
    zoneQuiz.style.display="block";
});

dashbord_ajouterQuestion.addEventListener("click",(e)=>{
    zoneQuiz.style.display="none";
    container_quiz_quistion.style.display="block"
    zoneQuestion.style.display="block";
})


const question_type = document.querySelector("#question-type");
const zone_mcq_option = document.querySelector(".mcq-options");
const zone_VF_option = document.querySelector(".boolean-options");
const zone_text_option = document.querySelector(".text-options");

const btn_enregestrerQuiz = document.querySelector(".submit_btn_admin");

const  ajouter_questionQcm=document.querySelector(".ajouter_questionQcm");
const  ajouter_questionVF=document.querySelector(".ajouter_questionVF");
const  ajouter_questionText=document.querySelector(".ajouter_questionText");


function ajouterQuiz() {
    zone_VF_option.style.display = "none";
    zone_mcq_option.style.display = "none";
    zone_text_option.style.display = "none";


    question_type.addEventListener("change", (e) => {
        
        switch (e.target.value) {
            
                case "text":
                zone_mcq_option.style.display = "none";
                zone_VF_option.style.display = "none";
                zone_text_option.style.display = "block";
                btn_enregestrerQuiz.style.display = "block";
                ajouter_questionText.addEventListener("click", ()=>{
                    ajouterQuiz();
                });
                
                break;
            case "mcq":
                zone_VF_option.style.display = "none";
                zone_text_option.style.display = "none";
                zone_mcq_option.style.display = "block";
                btn_enregestrerQuiz.style.display = "block";
                ajouter_questionQcm.addEventListener("click", ()=>{
                    ajouterQuiz();
                });
                
                break;

            case "boolean":
                zone_mcq_option.style.display = "none";
                zone_text_option.style.display = "none";
                zone_VF_option.style.display = "block";
                btn_enregestrerQuiz.style.display = "block";

                ajouter_questionVF.addEventListener("click", ()=>{
                    ajouterQuiz();
                });
                break;

            default:
                console.log("La valeur n'existe pas");
                break;
        }
    });
}

function ajouteQuiz(title,categorie,temps,niveau){
    const nouveauQuiz=
        {
            "title":title ,
            "categorie": categorie,
            "tempsEstime": temps,
            "Niveau": niveau,
            "questions": []
        }
    
}

ajouterQuiz();
