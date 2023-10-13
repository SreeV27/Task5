function countOfDigits() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;
   var count = 0;


   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

      while (num > 0) {
         var n = num % 10;
         count += 1;
         num = Math.floor(num / 10);

      }
      document.getElementById("result").innerHTML = "Number of digits=" + count;


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}