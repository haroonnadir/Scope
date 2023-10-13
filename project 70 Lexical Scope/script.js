function outerFunction() {
  const outerVariable = 42;

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  innerFunction();
}
outerFunction(); // Output: 42
