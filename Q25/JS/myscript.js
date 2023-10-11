function multiplicationTable() {

   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;

   var limit = document.getElementById("limit").value;


   for (var i = 1; i <= limit; i++) {
      document.getElementById("result").innerHTML += +num + "*" + i + "=" + (i * num) + "<br>";


   }


}