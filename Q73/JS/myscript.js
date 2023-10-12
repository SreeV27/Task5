function deleteconsonents() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {


      const vowelPattern = /[aeiou]/;


      var temp = "";

      for (var i = 0; i < str.length; i++) {

         if (str[i].match(vowelPattern)) {
            temp += str[i];
         }


      }

      document.getElementById("result").innerHTML = "New string after removal of all consonents is " + temp;

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}