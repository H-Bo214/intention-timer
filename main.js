// creating variables for each class of: study, meditate, exersise and their wrapper
var categoryChoiceWrapper = document.querySelector('.category-choice-boxes-wrapper');

// creating variables for the img associated within categories: study, meditate, exercise
var lightbulb = document.querySelector('.lightbulb-img');
var lotus = document.querySelector('.lotus-img');
var runningShoe = document.querySelector('.running-shoe-img');
var pStudy = document.querySelector('.p-study');
var pMeditate = document.querySelector('.p-meditate');
var pExercise = document.querySelector('.p-exercise');

// creating a variable for null on category boxes
// creating variables for <form>: <button> & <warning>
var selectedCategory = null;
var startActivity = document.getElementById('start-activity');
var warning = document.querySelector('.warning');

// creating variables for <form>: user accomplishments, minutes and seconds
var userGoal = document.querySelector('.users-accomplishment-input');
var minutes = document.querySelector('.user-minutes-input');
var seconds = document.querySelector('.user-seconds-input');

// creating variables for all "hidden pages"
var page1 = document.querySelector('.left-content-in-main');
var page2 = document.querySelector('.current-activity-page2');

// creating variables for the page2: user accomplishment goal, minutes and seconds and button
var page2UserGoal = document.getElementById('user-accomplishment-goal');
var page2TimeCounter = document.getElementById('time-counter');
var page2StartButton = document.getElementById('task-start-button')

//creating addEventListener for parent of study, meditate and exersise boxes
categoryChoiceWrapper.addEventListener('click', categoryChoice);
var studyHandler = document.querySelector('.study');
var meditateHandler = document.querySelector('.meditate');
var exerciseHandler = document.querySelector('.exercise')

// function for EventListener in categoryChoiceWrapper
function categoryChoice(event) {
  meditateHandler.classList.remove('active');
  exerciseHandler.classList.remove('active');
  studyHandler.classList.remove('active');

  lotus.src = ('assets/meditate.svg');
  runningShoe.src = ('assets/exercise.svg');
  lightbulb.src = ('assets/study.svg');

  if (event.target === studyHandler) {
    studyHandler.classList.add('active');
    lightbulb.src = ('assets/study-active.svg');
    selectedCategory = 'study';
    return
  }
  if (event.target === meditateHandler) {
    meditateHandler.classList.add('active');
    lotus.src =('assets/meditate-active.svg');
    selectedCategory = 'meditate';
    return
  }
  if (event.target === exerciseHandler) {
    exerciseHandler.classList.add('active');
    runningShoe.src = ('assets/exercise-active.svg');
    selectedCategory = 'exercise';
    return
  }
}
// creating addEventListener for button: start activity
startActivity.addEventListener('click', onStartActivity);

// function for warning label
function onStartActivity(event) {
  event.preventDefault();
  var validCategory = selectedCategory !== null;
  var validGoal = userGoal.value !== "";
  var validMinutes = minutes.value !== "" && minutes.value !== 'e';
  var validSeconds = seconds.value !== "" && seconds.value !== 'e';
  if (validCategory && validGoal && validMinutes && validSeconds) {
    changePage1();
  } else {
    warning.hidden = false;
    userGoal.style.borderBottom = '1px solid #EFB7EC';
  }
}

// function to change left content of page1 to page2
function changePage1() {
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
