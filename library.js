
//return integer in string
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :)
      const firstNum = inputString.replace(/(^\d+)(.+$)/i,'$1');;
      return parseInt(firstNum);
    }

//console.log(typeof(getAge('5 years old')))
// console.log(getAge('4 years old'));


//
function litres(time) {
  let total = Math.floor( 0.5 * time);

  return total;
}

// console.log(litres(6));

//make negative
function makeNegative(num) {
  return -Math.abs(num);
}

console.log(makeNegative(42));
