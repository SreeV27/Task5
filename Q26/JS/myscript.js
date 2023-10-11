function printNaturalNumbers() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;

   for (var i = 1; i <= num; i++) {

      document.getElementById("result").innerHTML += " " + i;
   }


}