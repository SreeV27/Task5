function firstAndLast() {

   var num = document.getElementById("number").value;

   var numbers = /^[0-9]+$/;

   if (num.match(numbers)) {

      var x = parseInt(document.getElementById("number").value);
      var lastDigit = x % 10;
      var firstDigit = parseInt(num.charAt(0));

      document.getElementById("result").innerHTML = "First digit is " + firstDigit + "and last digit is " + lastDigit;


   } else {
      document.getElementById("result").innerHTML = "Please enter a Number";
   }


}