function printOddNumbers() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;

   for (var i = 1; i <= num; i++) {

      if (i % 2 != 0) {
         document.getElementById("result").innerHTML += " " + i;
      }
   }


}