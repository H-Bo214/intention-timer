// creating variables for each class of study, meditate, exersise
var study = document.querySelector('.study-box');
var meditate = document.querySelector('.meditate-box');
var exercise = document.querySelector('.exercise-box');

// creating var for the img associated with categorys study meditate and Exercise
var lightbulb = document.querySelector(".lightbulb-img");
var lightbulbActive = document.querySelector(".lightbulb-img-active");

var lotus = document.querySelector('.lotus-img');
var lotusActive = document.querySelector('.lotus-img-active');

var runningShoe = document.querySelector('.running-shoe-img');
var runningShoeActive = document.querySelector('.running-shoe-img-active');

//  creating a var of null
var selectedCategory = null;
var startActivity = document.getElementById('start-activity');
var warning = document.querySelector('.warning');

// create a var for minutes and Seconds user goals
var userGoal = document.querySelector('.users-goals-to-accomplish');
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");

// create a var for all "toggled pages"
var page1 = document.querySelector('.left-content-of-main');
var page2 = document.querySelector('.current-activity-page');

// create var for the page2 user goal input, minutes and seconds and button
var page2UserGoal = document.getElementById('users-first-input-field');
var page2TimeCounter = document.getElementById('time-counter');
var page2StartButton = document.getElementById('task-start')
// create a addEventListener to each var that was created for study, meditate, exersise
study.addEventListener('click', clickStudy);
meditate.addEventListener('click', clickMeditate);
exercise.addEventListener('click', clickExercise);
// create an addEventListener for button start ACTIVITY
startActivity.addEventListener('click', onStartActivity);
// functions for each of the categorys study, meditate, exersise
function clickStudy() {
  study.style.borderColor = "#B3FD78";
  study.style.color = "#B3FD78";
  lightbulb.hidden = true;
  lightbulbActive.hidden = false;

  meditate.style.borderColor = "#FFF";
  meditate.style.color = "#FFF";
  lotus.hidden = false;
  lotusActive.hidden = true;

  exercise.style.borderColor = "#FFF";
  exercise.style.color = "#FFF";
  runningShoe.hidden = false;
  runningShoeActive.hidden = true;

  selectedCategory = "study";
}

function clickMeditate() {
  meditate.style.borderColor = "#C278FD";
  meditate.style.color = "#C278FD";
  lotus.hidden = true;
  lotusActive.hidden = false;

  study.style.borderColor = "#FFF";
  study.style.color = "#FFF";
  lightbulb.hidden = false;
  lightbulbActive.hidden = true;

  exercise.style.borderColor = "#FFF";
  exercise.style.color = "#FFF";
  runningShoe.hidden = false;
  runningShoeActive.hidden = true;

  selectedCategory = "meditate";
}

function clickExercise() {
  exercise.style.borderColor = "#FD8078";
  exercise.style.color = "#FD8078";
  runningShoe.hidden = true;
  runningShoeActive.hidden = false;

  study.style.borderColor = "#FFF";
  study.style.color = "#FFF";
  lightbulb.hidden = false;
  lightbulbActive.hidden = true;

  meditate.style.borderColor = "#FFF";
  meditate.style.color = "#FFF";
  lotus.hidden = false;
  lotusActive.hidden = true;

  selectedCategory = "exercise";
}

// function for warning label
function onStartActivity(event) {
  event.preventDefault();
  validateCategory()

}

function validateCategory() {
  if (selectedCategory === null) {
    warning.hidden = false
  } else {
    warning.hidden = true
    validateUserGoal()
  }
}

function validateUserGoal() {
  console.log('hello user goal');
  if (userGoal.value == "") {
    warning.hidden = false
  } else {
    warning.hidden = true
    validateMinutes();
  }
}

function validateMinutes() {
  console.log("yes");
  if (minutes.value == "" || minutes.value === "e") {
    warning.hidden = false
  } else {
    warning.hidden = true
    validateSeconds();
  }
}

function validateSeconds() {
  console.log("yes");
  if (seconds.value == "" || seconds.value === "e") {
    warning.hidden = false
  } else {
    warning.hidden = true
    changePage1()
  }
}

function changePage1 () {
  page1.hidden = true;
  page2.hidden = false;
  page2UserGoal.innerText = userGoal.value
  page2TimeCounter.innerText = `${minutes.value}:${seconds.value}`;
  if (selectedCategory === "study") {
    page2StartButton.classList.add('study-timer-border');
  }
  if (selectedCategory === "meditate") {
    page2StartButton.classList.add('meditate-timer-border');
  }
  if (selectedCategory === "exercise") {
    page2StartButton.classList.add('exercise-timer-border');
    console.log(page2StartButton.classList);
  }
}




































// ppp
