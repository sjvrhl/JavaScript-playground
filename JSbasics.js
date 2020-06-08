/*
let string = 'The revolution will not be televised.';

let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
let response = one + 'I am fine — ' + two;
console.log(response)


let song = `Fight the Youth`;
let score = 9;
let highestScore = 10;
let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';
let output2 = `I like the song "${ song }".\nI gave it a score of ${ score/highestScore * 100 }%.`;

let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);

console.log(pos);



let age = 80

//if (age >= 91 || age <= 13) {console.log("age is incorrect!")}
//if (age >= 91 || age <= 13) {console.log("age is incorrect!")}
if (!(age >= 14 && age <= 90)) {
  console.log("age is incorrect!")
} else {
  console.log("age correct")
}




LOGIN (put in browser console)

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == '' || pass == null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}


let value = prompt('Please enter a number', '');

if (value > 0) {
  alert('greater than zero')
} else if (value < 0) {
  alert('less than zero')
} else {
  alert('equals zero')
}



let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
// IS SAME AS:
let result =  (a + b < 4) ? 'below' : 'over';



let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
//IS SAME AS:

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';



  // Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}



let favNum = 43;

switch(true) {
  case favNum > 42:
  console.log("LAME. That number is too large!");
  break;
  case favNum > 41:
  console.log("Yay! That's my favorite too!");
  break;
  case favNum < 42:
  console.log("Eh, that's OK but "+ (++favNum) + " would be even better");
  break;
  default:
  console.log("I asked for a number!");
}


// REWRITING AN IF ELSE STRATEMENT WITH ? OR ||

 function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm ('Did parents allow you?');
}


function checkAge(age) {
  return age > 18 || confirm ('Did parents allow you?');
}



function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}



FOR LOOPS

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}




//Rewrite with arrow functions:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

//Like so:

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree",
  () => alert("You agreed."),
  () => alert("You canceled the execution.");
)



//Write a function called add7 that takes one number and returns that number + 7.
    let add7 = (x) => x + 7;
    console.log(add7(5));



//Write a function called multiply that takes 2 numbers and returns their product.
    function multiply (a,b)
    {return a*b;
    }
    console.log(multiply(4,4));



//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

let string = "duDeS"
function capitalize1 () {
  console.log(string[0].toLowerCase()+string.slice(1));
}

function capitalize2 () {
  console.log(string.charAt(0).toLowerCase()+string.slice(1));
}

capitalize1();
capitalize2();

// Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"

function lastLetter () {
  console.log(string.slice(-1));
}

lastLetter();

*/