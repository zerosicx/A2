// Global Variables
let activePage = 0;
let titleText = document.getElementById("title");
let subtitleText = document.getElementById("subtitle");
let introText = document.getElementById("introText");
let submitButton = document.getElementById("submitButton");


let ageForm = document.getElementById("ageForm");
let cholesterolForm = document.getElementById("cholesterolForm");
let genderForm = document.getElementById("genderForm");
let bpForm = document.getElementById("bpForm");
let smokerForm = document.getElementById("smokerForm");

display(0);




// Data structures









// Display
function display(activePage) {

  ageForm.style.display = "none";
  cholesterolForm.style.display = "none";
  genderForm.style.display = "none";
  bpForm.style.display = "none";
  smokerForm.style.display = "none";
  introText.style.display = "none";
  submitButton.innerText = "Next";


  if (activePage === 0){
    displayStart();
  } else if (activePage === 1){
    displayAge();
  } else if (activePage === 2){
    displayGender();
  } else if(activePage ===3){
    displayCholesterol();
  } else if(activePage ===4) {
    displaySmoker();
  } else if(activePage ===5) {
    displayBp();
  }
}

function displayStart(){
  // Change the title and subtitle
  titleText.innerText = "Framingham Risk Score Assessment";
  titleText.style.fontSize = "3rem";
  subtitleText.innerText = "The Framingham Risk Score is a gender-specific algorithm used to estimate the risk of an individual developing coronary heart disease.";

  introText.style.display = "block";
  introText.innerText = "This assessment takes no identifiable personal information. This calculator was created solely for the purpose of education and no information will be unwillingly distributed. Information will be only held temporarily and will be deleted immediately after the assessment. Taking this assessment means you agree with this.";
  submitButton.innerText = "Start Assessment";
}

function displayAge(){
  titleText.innerText = "Age";
  subtitleText.innerText = "Please select your age group";

  ageForm.style.display = "block";
}

function displayGender(){
  titleText.innerText = "Gender";
  subtitleText.innerText = "Please select your biological gender";

  genderForm.style.display = "block";
}

function displayCholesterol(){
  titleText.innerText = "Cholesterol";
  subtitleText.innerText = "Please select your cholesterol levels";

  cholesterolForm.style.display = "block";
}

function displaySmoker(){
  titleText.innerText = "Smoker";
  subtitleText.innerText = "Are you a smoker?";

  smokerForm.style.display = "block";
}

function displayBp(){
  titleText.innerText = "Blood Pessure";
  subtitleText.innerText = "Please select your blood pressure status";

  bpForm.style.display = "block";
}

function nextPage(){
  if (activePage > 4){
    activePage = 0;
  } else {
    activePage++;
  }
  display(activePage);
}
