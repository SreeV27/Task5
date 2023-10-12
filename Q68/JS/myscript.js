function count() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

      var vowelCount = 0;
      var consonantsCount = 0;

      const vowelPattern = /[aeiou]/;


      for (var i = 0; i < str.length; i++) {

         if (str[i].match(vowelPattern)) {
            vowelCount += 1;
         } else {

            consonantsCount += 1;

         }

      }

      document.getElementById("result").innerHTML = "Count of vowels is " + vowelCount + "and count of consonants " + consonantsCount;

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}