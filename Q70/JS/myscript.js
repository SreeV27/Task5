function largeAndSmall() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {


      var words = str.split(" ");

      var large = 0;
      var small = 0;
      for (var i = 0; i < words.length; i++) {

         if (words[i].length > words[large].length) {
            large = i;

         }
         if (words[i].length < words[small].length) {
            small = i;

         }


      }

      document.getElementById("result").innerHTML = "Largest word is " + (words[large]) + " and smallest word is " + (words[small]);


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}