function factors() {

   var num = parseInt(document.getElementById("number").value);
   document.getElementById("values").innerHTML = "Factors are:";
   for (var i = 1; i <= num; i++) {
      if (num % i == 0) {
         document.getElementById("values").innerHTML += " " + i;
      }

   }
}