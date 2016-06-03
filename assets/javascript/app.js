$(document).ready(function() {

//set timer
//user will select answer
//check to see if answer is correct
//if answer is correct, add to amount of correct answers
//if user is wrong, add to amount of wrong answers
//create submit button at the end

var timer = 30;
var correctAnswers = 0;
var wrongAnswers = 0;

function run(){
      counter = setInterval(decrement, 1000);
    }

function stop(){
    clearInterval(counter);
 }

function decrement(){
      timer--;
      $('.timer').html("Time Left: " + '<h2>' + timer + '</h2>');
      if (timer === 0){
        stop();
      }
}

 	run();
  decrement();

function(){


}


})