function reverseCase() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

      var temp = " ";

      for (var i = 0; i < str.length; i++) {

         var char = str.charAt(i);
         if (char === char.toUpperCase()) {
            temp += char.toLowerCase();

         } else {
            temp += char.toUpperCase();


         }
         document.getElementById("result").innerHTML = "Result string is " + temp;
      }


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}