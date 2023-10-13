function calculateSalary() {
   document.getElementById("result").innerHTML = " ";
   var bs = parseInt(document.getElementById("number").value);


   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {


      if (bs <= 10000) {

         var hra = bs * (8 / 100);
         var da = bs * (10 / 100);
         var salary = bs + hra + da;

      } else if (bs > 10000 && bs <= 20000) {


         var hra = bs * (16 / 100);
         var da = bs * (20 / 100);
         var salary = bs + hra + da;
      } else {
         var hra = bs * (24 / 100);
         var da = bs * (30 / 100);
         var salary = bs + hra + da;

      }

      document.getElementById("result").innerHTML = "Your Gross Salary is " + salary;

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}