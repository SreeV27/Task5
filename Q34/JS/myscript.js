function postiveOrNegative() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;


   var count = 0;

   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {


      if (num >= 0) {
         document.getElementById("result").innerHTML = "The number is Positive";
      } else {
         document.getElementById("result").innerHTML = "The number is Negative";
      }


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}