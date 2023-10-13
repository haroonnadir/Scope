//Block Scope:
function exampleFunction() {
  if (true) {
    let y = 20;  // Block scope
  }
  console.log(y);  // Error: y is not defined here
}

//Function Scope:
function exampleFunction() {
  if (true) {
    var x = 10;  // Function scope
  }
  console.log(x);  // x is accessible here
}
