function missingCharacters() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

      var len = str.length;
      var codeSmall = 97;
      var codeLarge = 65;
      var i = 0;
      var flag = 0;
      var temp = 0;
      while (len > 0) {


      
         if (/^[a-z]+$/.test(str)) {

            if (str.charAt(i) == String.fromCharCode(codeSmall)) {
               i++;
               codeSmall++;
               len--;

            } else {

               flag = 1;
               if (temp == 0) {
                  temp = 1;
                  document.getElementById("result").innerHTML = "Missing letters: ";
               }
               document.getElementById("result").innerHTML += " " + (String.fromCharCode(codeSmall));
               codeSmall++;
            }

         }
	else if(/^[A-Z]+$/.test(str)){

 if (str.charAt(i) == String.fromCharCode(codeLarge)) {
               i++;
              codeLarge++;
               len--;

            } else {

               flag = 1;
               if (temp == 0) {
                  temp = 1;
                  document.getElementById("result").innerHTML = "Missing letters: ";
               }
               document.getElementById("result").innerHTML += " " + (String.fromCharCode(codeLarge));
               codeLarge++;
            }



}

else{
flag =1;
  document.getElementById("result").innerHTML ="please enter either lower case or upper case letters";
break;

}


      }


      if (flag == 0) {
         document.getElementById("result").innerHTML = "There is no missing letters ";
      }


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}