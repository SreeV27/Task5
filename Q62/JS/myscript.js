function printOccurence() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;
   var char = document.getElementById("char").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "") && (document.getElementById("char").value != null) && (document.getElementById("char").value != "")) {


      var count = 0;
      for (var i = 0; i < str.length; i++)

      {
         if (str.charAt(i) === char) {
            count += 1;


         }


      }

      document.getElementById("result").innerHTML = "Occurence of the character " + char + " in the given string is " + count;


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}