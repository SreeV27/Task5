function sumEvenNumbers() {
   document.getElementById("result").innerHTML = " ";
   var num = document.getElementById("number").value;
var sum=0;
   for (var i = 1; i <= num; i++) {

      if (i % 2 == 0) {
        sum+=i;
      }

   }

 document.getElementById("result").innerHTML += "Sum of even number up to " +num+ " is " +sum ;
}