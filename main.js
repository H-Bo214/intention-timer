// creating variables for each class of: study, meditate, exersise
var study = document.querySelector('.study-box');
var meditate = document.querySelector('.meditate-box');
var exercise = document.querySelector('.exercise-box');

// creating variables for the img associated with categories: study, meditate, exercise
var lightbulb = document.querySelector(".lightbulb-img");
var lightbulbActive = document.querySelector(".lightbulb-img-active");
var lotus = document.querySelector('.lotus-img');
var lotusActive = document.querySelector('.lotus-img-active');
var runningShoe = document.querySelector('.running-shoe-img');
var runningShoeActive = document.querySelector('.running-shoe-img-active');

// creating a variable for null on category boxes
// creating variables for <form>: <button> & <warning>
var selectedCategory = null;
var startActivity = document.getElementById('start-activity');
var warning = document.querySelector('.warning');

// creating variables for <form>: user accomplishments, minutes and seconds
var userGoal = document.querySelector('.users-accomplishment-input');
var minutes = document.querySelector(".user-minutes-input");
var seconds = document.querySelector(".user-seconds-input");

// creating variables for all "hidden pages"
var page1 = document.querySelector('.left-content-in-main');
var page2 = document.querySelector('.current-activity-page2');

// creating variables for the page2: user accomplishment goal, minutes and seconds and button
var page2UserGoal = document.getElementById('user-accomplishment-goal');
var page2TimeCounter = document.getElementById('time-counter');
var page2StartButton = document.getElementById('task-start-button')

// creating addEventListener to each variable that was created for study, meditate, exersise
study.addEventListener('click', clickStudy);
meditate.addEventListener('click', clickMeditate);
exercise.addEventListener('click', clickExercise);

// creating addEventListener for button: start activity
startActivity.addEventListener('click', onStartActivity);

// functions for each of the categorys boxes: study, meditate, exersise
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

// function to change left content of page1 to page2 
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
