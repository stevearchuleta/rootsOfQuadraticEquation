//read coefficients a, b, & c
function equation(){
  var a = document.getElementById('firstNumber').nodeValue;

  var b = document.getElementById('secondNumber').nodeValue;

  var c = document.getElementById('thirdNumber').nodeValue;

  //calculate the discriminant of the quadratic polynomial ax2+bx=c and store it into variable discr.  
  var discr = (b * b) - 4 * (a * c);

  var sqrDiscr = Math.sqrt(discr);
}
// Recall that: 1) if x<0, meaning x is negative, then there are no solutions to the equations... "the roots are imaginary"; 2) if x=0, then there is exactly one (1) solution... "the roots are real and equal"; 3) if x>0, meaining x is positive, then there are two (2) solutions... "the roots are real and unequal".
document.getElementById("answer").nodeValue = discr;
  if(a === 0 && b === 0 && c === 0){
    document.getElementById("secondAnswer").nodeValue = "All three coefficients cannot be zero.";
  }
  else if (discr < 0){
    document.getElementById("secondAnswer").nodeValue = "This equation has no solution.";
    document.getElementById("thridAnswer").nodeValue = "_";
  }
  else if(discr === 0){
    document.getElementById("secondAnswer").nodeValue = "This equation will produce one root.";
    document.getElementById("thirdAnswer").nodeValue = ((-b - sqrDiscr)/(2*a));
  }
  else if (discr > 0){
    document.getElementById("secondAnswer").nodeValue = "This equation will produce two roots.";
    document.getElementById("thridAnswer").nodeValue = ((-b + sqrDiscr)/(2*a))+ ";      "+ ((-b - sqrDiscr)/(2*a));
  }
  function cancel(){
    document.getElementById("firstNumber").nodeValue = null;
    document.getElementById("secondNumber").nodeValue = null;
    document.getElementById("thirdNumber").nodeValue = null;
    document.getElementById("answer").nodeValue = null;
    document.getElementById("secondAnswer").nodeValue = null;
    document.getElementById("thirdAnswer").nodeValue = null;
  }
  
