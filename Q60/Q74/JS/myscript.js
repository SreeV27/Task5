function occurrence() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {
      var count = {};
      for (var i = 0; i < str.length; i++) {

         var char = str.charAt(i);
         if (char in count) {
            count[char]++;

         } else {
            count[char] = 1;
         }


      }
      document.getElementById("result").innerHTML = "Count of letters in the word is " + JSON.stringify(count, null, 2);


      let highestValue = -Infinity;
      let keyWithHighestValue = null;

      for (let key in count) {
         if (count.hasOwnProperty(key) && typeof count[key] === 'number') {
            if (count[key] > highestValue) {
               highestValue = count[key];
               keyWithHighestValue = key;
            }
         }
      }
      document.getElementById("result").innerHTML += "<br>Alphabet with maximum occurrence is " + keyWithHighestValue + " and the count is " + highestValue;


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}