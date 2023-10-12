function palindrome() {
   document.getElementById("result").innerHTML = " ";
   var num = parseInt(document.getElementById("number").value);
   var rev = 0;
	var temp =num;

   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

      while (num > 0) {
         var n = num % 10;
         rev=(rev*10)+n;
         num = Math.floor(num / 10);

      }

	if( temp === rev){
  document.getElementById("result").innerHTML = "The Given number is palindrome";
}

else{
 document.getElementById("result").innerHTML = "The Given number is  not palindrome";

}


      

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}