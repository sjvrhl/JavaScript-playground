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

  */

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