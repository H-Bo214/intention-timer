// creating variables for each class of study, meditate, exersise
var study = document.querySelector('.study-box');
var lightbulb = document.querySelector('.lightbulb-img'); 
var lightbulbActive = document.querySelector('.lightbulb-img-active');
var meditate = document.querySelector('.meditate-box');
var lotus = document.querySelector('.lotus-img');
var lotusActive = document.querySelector('.lotus-img-active');
var exercise = document.querySelector ('.exercise-box');
var runningShoe = document.querySelector('.running-shoe-img');
var runningShoeActive = document.querySelector('.running-shoe-img-active');
//created variables for warning message functionality
var descriptions = NaN;
var userGoals = document.querySelector('.users-goals-to-accomplish');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');

var selectedCategory = null;


var startActivity = document.querySelector('.start-activity');
var warning = document.querySelector('.warning');

// create a addEventListener to each var that was created for study, meditate, exersise
study.addEventListener('click', clickStudy);
meditate.addEventListener('click', clickMeditate);
exercise.addEventListener('click', clickExercise);

//created addEventListener for warning message functionality
startActivity.addEventListener('click', onStartActivity);

// function for clickStudy
function clickStudy() {
  study.style.borderColor = '#B3FD78';
  study.style.color = '#B3FD78';
  lightbulb.hidden = true;
  lightbulbActive.hidden = false; 
  selectedCategory = "study";
}

// function for clickMeditate
function clickMeditate() {
meditate.style.borderColor = '#C278FD';
meditate.style.color = '#C278FD';
lotus.hidden = true;
lotusActive.hidden = false;
selectedCategory = "meditate";
}

// function for clickExersise
function clickExercise() {
  exercise.style.borderColor = '#FD8078';
  exercise.style.color = '#FD8078';
  runningShoe.hidden = true;
  runningShoeActive.hidden = false;
  selectedCategory = 'exercise';
  }

function input1() {
  selectedCategory = 'exercise';
}





// //created addEventListener for warning message functionality
// startActivity.addEventListener('click', onStartActivity);


// //created variables for warning message functionality
// var selectedCategory = null;
// var startActivity = document.querySelector('.start-activity');
// var warning = document.querySelector('.warning');

// var selectedDescription = null;
// var selectedMinutes = 'minutes';
// var selectedSeconds = 'seconds';

//function for warning message if all four inputs are not active.
  function onStartActivity(event) {
    // console.log(event);
    event.preventDefault()
    if(selectedCategory === null) {
      warning.hidden = false;
    } else {
      warning.hidden = true;
    }
  
  }


  function inputOfNan(event) {
    event.preventDefault();
    if(descriptions === Nan){
      warning.hidden = false;
    } else {
      warning.hidden = true;
    }
  }
  


// function fieldValid() {
//   if(form.elements.nameItem('time-in-minutes').value ==="") {
//     alert('Please enter minutes');
//     valid = false;


//   }
// }





















  // Not a number function.
// var minutes = document.querySelector('.minutes');
// var seconds = document.querySelector('.seconds');

// function isNan(minutes) {

// }