function perfectNumber() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;

   var sum = 0;


   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

      for (var i = 1; i < num; i++) {
         if (num % i == 0) {
            sum += i;


         }

      }
      if (num == sum) {

         document.getElementById("result").innerHTML = "The number " + num + " is a perfect number";

      } else {
         document.getElementById("result").innerHTML = "The number " + num + " is not a perfect number";

      }

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}