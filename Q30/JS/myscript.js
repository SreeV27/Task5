function productOfDigits() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;
   var pdt = 1;


   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

      while (num > 0) {
         var n = num % 10;
         pdt *= n;
         num = Math.floor(num / 10);

      }
      document.getElementById("result").innerHTML = "Product=" + pdt;


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}