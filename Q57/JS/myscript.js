function lastChar() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {
 var lastIndex= (str.length)-1;

      document.getElementById("result").innerHTML = "Last Character is " + (str.charAt(lastIndex));


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}