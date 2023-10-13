function palindrome() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {


      var words = str.split(" ");

      for (var i = 0; i < words.length; i++) {

         var str1 = Array.from(words[i]).reverse().join("");


         if (words[i] === str1) {

            var temp = "";
		len=str1.length ;
            while(len> 0)

            {
               temp += "*" ;
		len--;

            }
            words[i] = temp;


         }
      }
      var newStr = words.join(" ");
      document.getElementById("result").innerHTML = "New string is " + newStr;
   } else {
      document.getElementById("result").innerHTML = " ";

   }


}