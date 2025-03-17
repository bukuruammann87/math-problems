import math;

function get_random_math_problem() {
   let first = Math.floor(Math.random() * 10) + 1;
   let second = Math.floor(Math.random() * 10) + 1;
   return `${first} × ${second}`;
}

function get_solution(user_input) {
   if (isNaN(user_input)) {
       return "Please enter a number.";
   } else if (user_input === Math.floor((get_random_math_problem()))) {
       return "Correct!";
   } else {
       return "Incorrect, the correct answer is: ${Math.floor(get_random_math_problem())}. Try again.";
   }
}