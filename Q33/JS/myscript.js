function primeNumber() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;


   var count = 0;

   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

      for (var i = 1; i <= num; i++) {

         if (num % i == 0) {
            count = count + 1;
         }

      }
      if (count == 2) {
         document.getElementById("result").innerHTML = "The number is Prime";
      } else {

         document.getElementById("result").innerHTML = "The number is Not Prime";
      }

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}