function checkPalindrome() {

   var str1 = document.getElementById("str").value;

   var str2 = Array.from(str1).reverse().join("");

   if ((document.getElementById("str").value != null) && (document.getElementById("str").value != ""))

   {


      if (str1 == str2) {
         document.getElementById("result").innerHTML = "Given string is palindrome";

      } else {

         document.getElementById("result").innerHTML = "Given string is not palindrome";

      }

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}