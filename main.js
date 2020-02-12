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
  study.classList.add('active');
  meditate.classList.remove('active');
  exercise.classList.remove('active');
  lightbulb.hidden = true;
  lightbulbActive.hidden = false;
  lotus.hidden = false;
  lotusActive.hidden = true;
  runningShoe.hidden = false;
  runningShoeActive.hidden = true;
  selectedCategory = "study";
}

function clickMeditate() {
  meditate.classList.add('active');
  study.classList.remove('active');
  exercise.classList.remove('active');
  lotus.hidden = true;
  lotusActive.hidden = false;
  lightbulb.hidden = false;
  lightbulbActive.hidden = true;
  runningShoe.hidden = false;
  runningShoeActive.hidden = true;
  selectedCategory = "meditate";
}

function clickExercise() {
  exercise.classList.add('active');
  meditate.classList.remove('active');
  study.classList.remove('active');
  runningShoe.hidden = true;
  runningShoeActive.hidden = false;
  lightbulb.hidden = false;
  lightbulbActive.hidden = true;
  lotus.hidden = false;
  lotusActive.hidden = true;
  selectedCategory = "exercise";
}

// function for warning label
function onStartActivity(event) {
  event.preventDefault();
  var validCategory = selectedCategory !== null;
  var validGoal = userGoal.value !== "";
  var validMinutes = minutes.value !== "" && minutes.value !== "e";
  var validSeconds = seconds.value !== "" && seconds.value !== "e";
  if(validCategory && validGoal && validMinutes && validSeconds) {
    changePage1();
  } else {
    warning.hidden = false;
  }
}

function changePage1 () {
  page1.hidden = true;
  page2.hidden = false;
  page2UserGoal.innerText = userGoal.value
  page2TimeCounter.innerText = `${minutes.value}:${seconds.value}`;
  switch (selectedCategory) {
    case "study": 
      page2StartButton.classList.add('study-timer-border');
      break;
    case "meditate": 
      page2StartButton.classList.add('meditate-timer-border');
      break;
    case "exercise": 
      page2StartButton.classList.add('exercise-timer-border');
      break;
    default:
      break;
  }
}