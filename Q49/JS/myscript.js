function fibonacci() {
   document.getElementById("result").innerHTML = " ";
   var num = parseInt(document.getElementById("number").value);


   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {
      var a = 0;
      var b = 1;


      while (num > 0) {


         document.getElementById("result").innerHTML += " " + a;
         var c = a;
         a = b;
         b = c + b;

         num -= 1;
      }


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}