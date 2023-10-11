function factorial() {

   var num = parseInt(document.getElementById("number").value);
   var fact = 1;
   document.getElementById("values").innerHTML = "Factorial of the number is:";
   for (var i = 1; i <= num; i++) {
      fact *= i;

   }
   document.getElementById("values").innerHTML += " " + fact;


}