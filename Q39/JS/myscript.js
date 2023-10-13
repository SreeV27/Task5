function sumEvenOddNumbers() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;
var evenSum=0;
var oddSum=0;
   for (var i = 1; i <= num; i++) {

      if (i % 2 == 0) {
       evenSum+=i;
      }
else{
oddSum+=i;
}

   }

 document.getElementById("result").innerHTML += "Sum of even numbers up to " +num+ " is " +evenSum+ " and odd numbers is " +oddSum  ;
}