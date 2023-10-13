function printIndex() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;
   var char = document.getElementById("char").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "") && (document.getElementById("char").value != null) && (document.getElementById("char").value != "")) {


      document.getElementById("result").innerHTML = "Indexes are: ";

      for (var i = 0; i < str.length; i++)

      {
         if (str.charAt(i) === char) {
            document.getElementById("result").innerHTML += +(i + 1) + " ";


         }


      }


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}