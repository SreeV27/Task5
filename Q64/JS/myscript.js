function replaceWord() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;
   var word = document.getElementById("word").value;
   var newword = document.getElementById("newword").value;
   var temp = str;

   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "") && (document.getElementById("word").value != null) && (document.getElementById("word").value != "") && (document.getElementById("newword").value != null) && (document.getElementById("newword").value != "")) {

      document.getElementById("result").innerHTML = "Old sentence is " + temp;
      var words = str.split(" ");


      for (var i = 0; i < words.length; i++) {

         if (words[i] === word) {
            words[i] = newword;

         }


      }

      var newSentence = words.join(" ");


      document.getElementById("result").innerHTML = "<br>New sentence is " + newSentence;


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}