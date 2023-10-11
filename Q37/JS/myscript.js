function sumAndAvgNumbers() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;
   var sum = 0;
   for (var i = 1; i <= num; i++) {
      sum += i;


   }
   document.getElementById("result").innerHTML = "Sum of first " + num + " natural number is " + sum + " and average is " + (sum / num);


}