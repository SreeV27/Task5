function printNaturalNumbers() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;

   for (var i = num; i > 0; i--) {

      document.getElementById("result").innerHTML += " " + i;
   }


}