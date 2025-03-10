// reset only when reloading the screen
let cocktail_number = 1;
let cocktail_list = [];
let total_cocktails = cocktailList.length;
let total_cocktails_finished = 0;
let answer_switch = true;
let suggestion_switch = false;

// reset after each cocktail
let answer;
let question_number;
let random_cocktail;
let recipe_length;
let indexOfAnswer;
let cocktail_finished;
let ingredients_list;
let ml_list;
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

// DOM variables
const input = document.getElementById("input");
const check_answer = document.getElementById("check-answer");
const cocktails_done = document.getElementById("cocktails-done");
const total_cocktails_text = document.getElementById("total-cocktails");
const cocktail_name = document.getElementById("cocktail-name");
const question = document.getElementById("question")
const glass = document.getElementById("glass");
const ice = document.getElementById("ice");
const procedure = document.getElementById("procedure");
const ingredient1 = document.getElementById("ingredient1");
const ingredient2 = document.getElementById("ingredient2");
const ingredient3 = document.getElementById("ingredient3");
const ingredient4 = document.getElementById("ingredient4");
const ingredient5 = document.getElementById("ingredient5");
const ingredient6 = document.getElementById("ingredient6");
const ingredient7 = document.getElementById("ingredient7");
const ingredient8 = document.getElementById("ingredient8");
const ingredient9 = document.getElementById("ingredient9");
const ingredient10 = document.getElementById("ingredient10");
const ml1 = document.getElementById("ml1");
const ml2 = document.getElementById("ml2");
const ml3 = document.getElementById("ml3");
const ml4 = document.getElementById("ml4");
const ml5 = document.getElementById("ml5");
const ml6 = document.getElementById("ml6");
const ml7 = document.getElementById("ml7");
const ml8 = document.getElementById("ml8");
const ml9 = document.getElementById("ml9");
const ml10 = document.getElementById("ml10");
const garnish = document.getElementById("garnish");
const cocktail_img = document.getElementById("cocktail-img");
const show_answers = document.getElementById("showAnswers");
const next_cocktail = document.getElementById("nextCocktail");
const suggestion_switch_div = document.getElementById("suggestion-switch-div");

// Puts the cocktails from the database into a new empty array called cocktail_list
for (let i = 0; i < total_cocktails; i++) {
  cocktail_list.push(cocktailList[i]);
}

// Execute first cocktail
newCocktail();

suggestionSwitchCheck();

// Updating Total Cocktails number when loading the page
total_cocktails_text.innerHTML = total_cocktails;

function titleCase(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);    
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

function hideValues() {
  input.value = "";
  glass.innerHTML = "GLASS: ";
  ice.innerHTML = "ICE: ";
  procedure.innerHTML = "PROCEDURE: ";
  ingredient1.innerHTML = "";
  ingredient2.innerHTML = "";
  ingredient3.innerHTML = "";
  ingredient4.innerHTML = "";
  ingredient5.innerHTML = "";
  ingredient6.innerHTML = "";
  ingredient7.innerHTML = "";
  ingredient8.innerHTML = "";
  ingredient9.innerHTML = "";
  ingredient10.innerHTML = "";
  ml1.innerHTML = "";
  ml2.innerHTML = "";
  ml3.innerHTML = "";
  ml4.innerHTML = "";
  ml5.innerHTML = "";
  ml6.innerHTML = "";
  ml7.innerHTML = "";
  ml8.innerHTML = "";
  ml9.innerHTML = "";
  ml10.innerHTML = "";
  garnish.innerHTML = "GARNISH: ";
  cocktail_img.src = "";
  input.style.display = "inline-block";
  check_answer.style.display = "inline-block"
  show_answers.innerHTML = "Show Answers";
  suggestion_switch_div.style.display = "flex"
  answer_switch = true;
  question_number = 0;
}

function endQuiz() {
  window.location.href = "./index.html";
}

// Choosing random cocktail, calculating the length of that cockatil and loops the correct amount of questions for the ingredients
function newCocktail() {

  next_cocktail.style.display = "none";

  cocktails_done.innerHTML = cocktail_number;
  cocktail_number++

  question_number = 0;
  random_cocktail = 0;
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

  // Choosing random recipee and assigning it to the variable "cocktailNumber"
  random_cocktail = Math.floor(Math.random() * cocktail_list.length);

  // accesses the recipe length from the database and assigns it to a new variable also called "recipeLength"
  recipe_length = cocktail_list[random_cocktail].recipeLength;

  // Looping the ingredients into an array called "ingredients_list"
  for (let i = 0; i < recipe_length; i++) {
    if(i === 0) {
      ingredients_list = (Object.keys(cocktail_list[random_cocktail].ingredients[i]));
    } else {
      let ingredient = Object.keys(cocktail_list[random_cocktail].ingredients[i])
      ingredients_list.push(ingredient[0]);
    }
  }

  // Looping the ml into an array called "ml_list"
  for (let i = 0; i < recipe_length; i++) {
    if(i === 0) {
      ml_list = (Object.values(cocktail_list[random_cocktail].ingredients[i]));
    } else {
      let ml = Object.values(cocktail_list[random_cocktail].ingredients[i])
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
  cocktail_name.innerText = cocktail_list[random_cocktail].name;
  // Asking first question
  question.innerHTML = questions[question_number];
}

// Check answer and if correct, show the answer & flash background green, if incorrect flash background red
function checkAnswer() {
  answer = titleCase(input.value);

  if (question_number == recipe_length * 2 + 3 && answer === cocktail_list[random_cocktail][sections[question_number]]) {
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
      if (answer === cocktail_list[random_cocktail][sections[question_number]]) {
      nextQuestion();
      }
      else
      {
      red();
      setTimeout(function() { white(); }, 1000);
      }
    }
  input.value = "";
}

function nextQuestion () {
  if (sections[question_number] === "ingredient") {
    indexOfAnswer = ingredients_list.indexOf(answer);
    document.getElementById(sections[question_number] + (indexOfAnswer + 1).toString()).innerHTML = answer;
  } else if (sections[question_number] === "ml") {
    document.getElementById(sections[question_number] + (indexOfAnswer + 1).toString()).innerHTML = answer;
  } else {
    document.getElementById(sections[question_number]).innerHTML += cocktail_list[random_cocktail][sections[question_number]];
  }
  green();
  setTimeout(function() { white(); }, 1000);
  question_number++;
  setTimeout(function() { question.innerHTML = questions[question_number]; }, 1000);

  if (suggestion_switch) {
    if (sections[question_number] === "glass") {
      autocomplete(input, glassList);
    } else if (sections[question_number] === "ice") {
      autocomplete(input, iceList);
    } else if (sections[question_number] === "procedure") {
      autocomplete(input, procedureList);
    } else if (sections[question_number] === "ingredient") {
      autocomplete(input, ingredientsList);
    } else if (sections[question_number] === "ml") {
      autocomplete(input, mlList);
    } else if (sections[question_number] === "garnish") {
      autocomplete(input, garnishList);
    }
  }
  
}

// all questions correct for end screen
function allCorrect() {
  green();
  document.getElementById(sections[question_number]).innerHTML += cocktail_list[random_cocktail][sections[question_number]];
  question.innerHTML = "You've got it all correct!"
  cocktail_img.src = cocktail_list[random_cocktail].image;
  input.style.display = "none";
  check_answer.style.display = "none";
  cocktail_finished = true;
  show_answers.style.display = "none";
  suggestion_switch_div.style.display = "none";
  total_cocktails_finished++;

  if (cocktail_number - 1 !== total_cocktails) {
    next_cocktail.style.display = "inline-block";
  }
}

// Show/Hide Answers function
function showAnswers() {

if (!cocktail_finished) {
  if (answer_switch) {
    glass.innerHTML = "GLASS: " + cocktail_list[random_cocktail].glass;
    ice.innerHTML = "ICE: " + cocktail_list[random_cocktail].ice;
    procedure.innerHTML = "PROCEDURE: " + cocktail_list[random_cocktail].procedure;

    if (recipe_length >= 1) {
      ingredient1.innerHTML = ingredients_list[0];
    } else if (recipe_length >= 2) {
      ingredient2.innerHTML = ingredients_list[1];
    } else if (recipe_length >= 3) {
      ingredient3.innerHTML = ingredients_list[2];
    } else if (recipe_length >= 4) {
      ingredient4.innerHTML = ingredients_list[3];
    } else if (recipe_length >= 5) {
      ingredient5.innerHTML = ingredients_list[4];
    } else if (recipe_length >= 6) {
      ingredient6.innerHTML = ingredients_list[5];
    } else if (recipe_length >= 7) {
      ingredient7.innerHTML = ingredients_list[6];
    } else if (recipe_length >= 8) {
      ingredient8.innerHTML = ingredients_list[7];
    } else if (recipe_length >= 9) {
      ingredient9.innerHTML = ingredients_list[8];
    } else if (recipe_length >= 10) {
      ingredient10.innerHTML = ingredients_list[9];
    }

    if (recipe_length >= 1) {
      ml1.innerHTML = ml_list[0];
    } else if (recipe_length >= 2) {
      ml2.innerHTML = ml_list[1];
    } else if (recipe_length >= 3) {
      ml3.innerHTML = ml_list[2];
    } else if (recipe_length >= 4) {
      ml4.innerHTML = ml_list[3];
    } else if (recipe_length >= 5) {
      ml5.innerHTML = ml_list[4];
    } else if (recipe_length >= 6) {
      ml6.innerHTML = ml_list[5];
    } else if (recipe_length >= 7) {
      ml7.innerHTML = ml_list[6];
    } else if (recipe_length >= 8) {
      ml8.innerHTML = ml_list[7];
    } else if (recipe_length >= 9) {
      ml9.innerHTML = ml_list[8];
    } else if (recipe_length >= 10) {
      ml10.innerHTML = ml_list[9];
    }

    garnish.innerHTML = "GARNISH: " + cocktail_list[random_cocktail].garnish;
    cocktail_img.src = cocktail_list[random_cocktail].image;

    question.innerHTML = "";
    input.style.display = "none";
    check_answer.style.display = "none";
    suggestion_switch_div.style.display = "none";

    show_answers.innerHTML = "Hide Answers";

    answer_switch = false;

    } else {

      hideValues();

      question.innerHTML = questions[question_number];
    }
  }
}

function nextCocktail() {

  show_answers.style.display = "inline-block";
  next_cocktail.style.display = "none";

  cocktail_list.splice(random_cocktail, 1);

  if (cocktail_list.length == 0) {
    question.innerHTML = "Good Job! You Got Them All!"
  } else {
    white();

    hideValues();

    newCocktail();

    if (suggestion_switch) {
      if (sections[question_number] === "glass") {
        autocomplete(input, glassList);
      } else if (sections[question_number] === "ice") {
        autocomplete(input, iceList);
      } else if (sections[question_number] === "procedure") {
        autocomplete(input, procedureList);
      } else if (sections[question_number] === "ingredient") {
        autocomplete(input, ingredientsList);
      } else if (sections[question_number] === "ml") {
        autocomplete(input, mlList);
      } else if (sections[question_number] === "garnish") {
        autocomplete(input, garnishList);
      }
    }
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

// Autocomplete Function

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

// Input Check on Enter
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    console.log("enter")
    event.preventDefault();
    check_answer.click();
  }
});

// Suggestion Switch function
function suggestionSwitchCheck() {
document.addEventListener('DOMContentLoaded', function () {
  let checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      if (sections[question_number] === "glass") {
        autocomplete(input, glassList);
      } else if (sections[question_number] === "ice") {
        autocomplete(input, iceList);
      } else if (sections[question_number] === "procedure") {
        autocomplete(input, procedureList);
      } else if (sections[question_number] === "ingredient") {
        autocomplete(input, ingredientsList);
      } else if (sections[question_number] === "ml") {
        autocomplete(input, mlList);
      } else if (sections[question_number] === "garnish") {
        autocomplete(input, garnishList);
      }
      suggestion_switch = true;
    } else {
      autocomplete(input, []);
      suggestion_switch = false;
    }
  });
});
}

// Countup timer
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}