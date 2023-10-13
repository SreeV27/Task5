function count() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

      var charCount = 0;
      var digitsCount = 0;
      var specialCharCount = 0;

      const charPattern = /[a-zA-Z]/;
      const digitsPattern = /[0-9]/;
      const specialPattern = /[&_?().<,>@!-]/;


      for (var i = 0; i < str.length; i++) {

         if (str[i].match(charPattern)) {
            charCount += 1;
         } else if (str[i].match(digitsPattern)) {
            digitsCount += 1;

         } else if (str[i].match(specialPattern)) {
            specialCharCount += 1;

         }

      }

      document.getElementById("result").innerHTML = "Count of characters is " + charCount + "and count of digits " + digitsCount +"count of specialcharacter "+specialCharCount ;

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}