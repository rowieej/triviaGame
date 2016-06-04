$(document).ready(function() {

//set timer
//user will select answer
//check to see if answer is correct
//if answer is correct, add to amount of correct answers
//if user is wrong, add to amount of wrong answers
//create submit button at the end

var timer = 31;
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

//when user clicks on radio button, we need to see which they clicked
//if it is the answer--add to correctAnswer
/*var qA = [];
  if (answerArray[0] == $('input[name="qTwo"]:checked', '#triviaForm').val()){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
*/


//  $('input[type="radio"]').on('click', function(){
 
    /* var possibleValues = [];
    var myElements = $(this).attr('name');
      console.log(myElements);
   for ( var i = 0;  i < myElements.length; i++) {
      console.log( myElements[i]);//.attr('name') );
      possibleValues.push( myElements[i].attr('name') );

    }*/

    //var isTrueOrNot = possibleValues.contains($(this).attr('name'));


    alert ($(this).val());
    alert ($(this).attr('name'));
  
  var answerKey = //associat array
  var userAnswers = [];
  

  $(document).on('click', 'input[type="radio"]', function(event) {



});

/*
//If user selects correct answer, then add to correctAnswers
$('#question1').on('click', function() {
  if ($('input[name="qOne"]:checked', '.question1').val() == 'a'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }

  if ($('input[name="qTwo"]:checked', '#triviaForm').val() == 'b'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qThree"]:checked', '#triviaForm').val() == 'd'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

 $('#triviaForm').on('click', function() {
  if ($('input[name="qFour"]:checked', '#triviaForm').val() == 'c'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qFive"]:checked', '#triviaForm').val() == 'd'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qSix"]:checked', '#triviaForm').val() == 'a'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qSeven"]:checked', '#triviaForm').val() == 'd'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qEight"]:checked', '#triviaForm').val() == 'a'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qNine"]:checked', '#triviaForm').val() == 'c'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});

$('#triviaForm').on('click', function() {
  if ($('input[name="qTen"]:checked', '#triviaForm').val() == 'b'){
    correctAnswers++;
  }
  else{
    wrongAnswers++;
  }
 console.log("Wrong Answers: " + wrongAnswers);
 console.log("Correct Answers: " + correctAnswers);
});
*/
})