
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

//console.log(makeNegative(42));


document.getElementById("output").innerHTML = makeNegative(42);




let inputs = []; // Array to store input values
    function processInput() {
      // Get the value of the input field
      let input = document.getElementById("input").value;
      // Add the input value to the array
      inputs.push(input);
      // Clear the input field
      document.getElementById("input").value = "";
      // Update the output div to display the list of inputs
      let output = "";
      for (let i = 0; i < inputs.length; i++) {
        output += "<li>" + inputs[i] + "</li>";
      }
      document.getElementById("output").innerHTML = "<ul>" + output + "</ul>";
    }