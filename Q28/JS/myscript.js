function factors() {

   var num = document.getElementById("number").value;


   if (document.getElementById("number").value != null && document.getElementById("number").value != "") {
      document.getElementById("result").innerHTML = "Numbers that are divisble by both 5 and 11 up to " + num + " are<br>";
      for (var i = 1; i <= num; i++) {
         if ((i % 5 == 0) && (i % 11 == 0)) {
            document.getElementById("result").innerHTML += " " + i;

         }

      }
   } else {

      document.getElementById("result").innerHTML = "";

   }


}