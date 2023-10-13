function shiftCharacters() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {


      var result = "";
      for (var i = 0; i < str.length; i++) {
         var char = str[i];
         if (char >= 'a' && char <= 'z') {
            // Handle lowercase letters
            var shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
            result += shiftedChar;
         } else if (char >= 'A' && char <= 'Z') {
            // Handle uppercase letters
            var shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
            result += shiftedChar;
         } else {
            // Handle non-alphabetic characters
            result += char;
         }
      }

      document.getElementById("result").innerHTML = "Result string is " + result;
   } else {
      document.getElementById("result").innerHTML = " ";

   }


}