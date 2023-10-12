function firstChar() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {


      document.getElementById("result").innerHTML = "First Character is " + (str.charAt(0));


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}