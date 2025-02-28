// Global Variables

// reset after each cocktail
let question_number = 0;
let cocktail_number = 0;
let cocktail_finished = false;
let ingredients_list;
let ml_list = [];
let recipe_length;
let answer;
let indexOfAnswer;
let questions = [
  "Which glass should we use for this cocktail?",
  "What type of ice should we use for this cocktail?",
  "How should we procede to make this cocktail?"
];
let sections = [
  "glass",
  "ice",
  "procedure"
];

// reset only when reloading the screen
let total_cocktails = cocktailList.length;
let total_cocktails_finished = 0;
let input = document.getElementById("input");
let answer_switch = true;

// Execute first cocktail
newCocktail();

// Returning all values of the cocktail card to normal
function initialize() {
  question_number = 0;
  cocktail_number = 0;
  cocktail_finished = false;
  
  questions = [
    "Which glass should we use for this cocktail?",
    "What type of ice should we use for this cocktail?",
    "How should we procede to make this cocktail?"
  ];

  sections = [
    "glass",
    "ice",
    "procedure"
  ];
}

function hideValues() {
  document.getElementById("input").value = "";
  document.getElementById("glass").innerHTML = "GLASS: ";
  document.getElementById("ice").innerHTML = "ICE: ";
  document.getElementById("procedure").innerHTML = "PROCEDURE: ";
  document.getElementById("ingredient1").innerHTML = "";
  document.getElementById("ingredient2").innerHTML = "";
  document.getElementById("ingredient3").innerHTML = "";
  document.getElementById("ingredient4").innerHTML = "";
  document.getElementById("ingredient5").innerHTML = "";
  document.getElementById("ingredient6").innerHTML = "";
  document.getElementById("ingredient7").innerHTML = "";
  document.getElementById("ingredient8").innerHTML = "";
  document.getElementById("ml1").innerHTML = "";
  document.getElementById("ml2").innerHTML = "";
  document.getElementById("ml3").innerHTML = "";
  document.getElementById("ml4").innerHTML = "";
  document.getElementById("ml5").innerHTML = "";
  document.getElementById("ml6").innerHTML = "";
  document.getElementById("ml7").innerHTML = "";
  document.getElementById("ml8").innerHTML = "";
  document.getElementById("garnish").innerHTML = "GARNISH: ";
  document.getElementById("cocktail-img").src = "";
  document.getElementById("input").style.display = "inline-block";
  document.getElementById("button").style.display = "inline-block"
  document.getElementById("showAnswers").innerHTML = "Show Answers";
  answer_switch = true;
  question_number = 0;
}

// Choosing random cocktail, calculating the length of that cockatil and loops the correct amount of questions for the ingredients
function newCocktail() {
  // Returning all values of the cocktail card to normal
  initialize();

  // Choosing random recipee and assigning it to the variable "cocktailNumber"
  cocktail_number = Math.floor(Math.random() * cocktailList.length);

  // accesses the recipe length from the database and assigns it to a new variable also called "recipeLength"
  recipe_length = cocktailList[cocktail_number].recipeLength;

  // Looping the ingredients into an array called "ingredients_list"
  for (let i = 0; i < recipe_length; i++) {
    if(i === 0) {
      ingredients_list = (Object.keys(cocktailList[cocktail_number].ingredients[i]));
    } else {
      let ingredient = Object.keys(cocktailList[cocktail_number].ingredients[i])
      ingredients_list.push(ingredient[0]);
    }
  }

  // Looping the ml into an array called "ml_list"
  for (let i = 0; i < recipe_length; i++) {
    if(i === 0) {
      ml_list = (Object.values(cocktailList[cocktail_number].ingredients[i]));
    } else {
      let ml = Object.values(cocktailList[cocktail_number].ingredients[i])
      ml_list.push(ml[0]);
    }
  }

  // Looping the amount of ingredients
  for (let i = 1; i <= recipe_length; i++) {
    questions.push("Which ingredient should we put in this cocktail?");
    questions.push("How much of that ingredient should we use for this cocktail?");
    sections.push("ingredient");
    sections.push("ml")
  }
// Pushing the last question & section
sections.push("garnish");
questions.push("What kind of garnish should we use for this cocktail?");

// Show name of cocktail
document.getElementById("cocktail-name").innerText = cocktailList[cocktail_number].name;
// Asking first question
document.getElementById("question").innerHTML = questions[question_number];
}

// Check answer and if correct, show the answer & flash background green, if incorrect flash background red
function checkAnswer() {
  answer = document.getElementById("input").value.toLowerCase();
  if (question_number == recipe_length * 2 + 3 && answer === cocktailList[cocktail_number][sections[question_number]]) {
    allCorrect();
  } else if (sections[question_number] === "ingredient") {
      if (ingredients_list.includes(answer)) {
        indexOfAnswer = ingredients_list.indexOf(answer);
        nextQuestion();
      } else {
        red();
        setTimeout(function() { white(); }, 1000);
      }
    } else if (sections[question_number] === "ml") {
      if (answer === ml_list[indexOfAnswer]) {
        nextQuestion();
      } else {
        red();
        setTimeout(function() { white(); }, 1000);
      }
    } else {
      if (answer === cocktailList[cocktail_number][sections[question_number]]) {
      nextQuestion();
      }
      else
      {
      red();
      setTimeout(function() { white(); }, 1000);
      }
    }
  document.getElementById("input").value = "";
}

function nextQuestion () {
  if (sections[question_number] === "ingredient") {

    indexOfAnswer = ingredients_list.indexOf(answer);
    document.getElementById(sections[question_number] + (indexOfAnswer + 1).toString()).innerHTML = answer;

  } else if (sections[question_number] === "ml") {

    document.getElementById(sections[question_number] + (indexOfAnswer + 1).toString()).innerHTML = answer;

  } else {

    document.getElementById(sections[question_number]).innerHTML += cocktailList[cocktail_number][sections[question_number]];

  }
  green();
  setTimeout(function() { white(); }, 1000);
  question_number++;
  setTimeout(function() { document.getElementById("question").innerHTML = questions[question_number]; }, 1000);
}

// all questions correct for end screen
function allCorrect() {
  green();
  document.getElementById(sections[question_number]).innerHTML += cocktailList[cocktail_number][sections[question_number]];
  document.getElementById("question").innerHTML = "You've got it all correct!"
  document.getElementById("cocktail-img").src = cocktailList[cocktail_number].image;
  document.getElementById("input").style.display = "none";
  document.getElementById("button").style.display = "none";
  cocktail_finished = true;
  document.getElementById("showAnswers").style.display = "none";
  total_cocktails_finished++;
}

// Show/Hide Answers function
function showAnswers() {
if (!cocktail_finished) {
  if (answer_switch) {
    document.getElementById("glass").innerHTML = "GLASS: " + cocktailList[cocktail_number].glass;
    document.getElementById("ice").innerHTML = "ICE: " + cocktailList[cocktail_number].ice;
    document.getElementById("procedure").innerHTML = "PROCEDURE: " + cocktailList[cocktail_number].procedure;

    if (recipe_length >= 1) {
      document.getElementById("ingredient1").innerHTML = ingredients_list[0];
    }
    if (recipe_length >= 2) {
      document.getElementById("ingredient2").innerHTML = ingredients_list[1];
    }
    if (recipe_length >= 3) {
      document.getElementById("ingredient3").innerHTML = ingredients_list[2];
    }
    if (recipe_length >= 4) {
      document.getElementById("ingredient4").innerHTML = ingredients_list[3];
    }
    if (recipe_length >= 5) {
      document.getElementById("ingredient5").innerHTML = ingredients_list[4];
    }
    if (recipe_length >= 6) {
      document.getElementById("ingredient6").innerHTML = ingredients_list[5];
    }
    if (recipe_length >= 7) {
      document.getElementById("ingredient7").innerHTML = ingredients_list[6];
    }
    if (recipe_length >= 8) {
      document.getElementById("ingredient8").innerHTML = ingredients_list[7];
    }

    if (recipe_length >= 1) {
      document.getElementById("ml1").innerHTML = ml_list[0];
    }
    if (recipe_length >= 2) {
      document.getElementById("ml2").innerHTML = ml_list[1];
    }
    if (recipe_length >= 3) {
      document.getElementById("ml3").innerHTML = ml_list[2];
    }
    if (recipe_length >= 4) {
      document.getElementById("ml4").innerHTML = ml_list[3];
    }
    if (recipe_length >= 5) {
      document.getElementById("ml5").innerHTML = ml_list[4];
    }
    if (recipe_length >= 6) {
      document.getElementById("ml6").innerHTML = ml_list[5];
    }
    if (recipe_length >= 7) {
      document.getElementById("ml7").innerHTML = ml_list[6];
    }
    if (recipe_length >= 8) {
      document.getElementById("ml8").innerHTML = ml_list[7];
    }

    document.getElementById("garnish").innerHTML = "GARNISH: " + cocktailList[cocktail_number].garnish;
    document.getElementById("cocktail-img").src = cocktailList[cocktail_number].image;

    document.getElementById("question").innerHTML = "";
    document.getElementById("input").style.display = "none";
    document.getElementById("button").style.display = "none";

    document.getElementById("showAnswers").innerHTML = "Hide Answers";

    answer_switch = false;

    } else {

      hideValues();

      document.getElementById("question").innerHTML = document.getElementById("question").innerHTML =   questions[question_number];
    }
  }
}


function nextCocktail() {
  document.getElementById("showAnswers").style.display = "inline-block";

  cocktailList.splice(cocktail_number, 1);

  if (cocktailList.length == 0) {
    document.getElementById("question").innerHTML = "Good Job! You Got Them All!"
  } else {
    white();

    hideValues();

    newCocktail();
  }
}

// Turn screen green
function green() {
  document.body.style.backgroundColor = "#16C47F";
}

// Turn screen red
function red() {
  document.body.style.backgroundColor = "#D84040";
}

// Turn screen white
function white() {
  document.body.style.backgroundColor = "ghostwhite";
}

// Wait function for flash timer
function wait(ms) {
  var time = new Date();
  var millisecs = time.getTime();
  var start_time = millisecs;
  var current_time = millisecs;
  while(current_time - start_time < ms) {
  time = new Date();
  current_time = time.getTime();
  }
}

// Input Check on Enter
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});