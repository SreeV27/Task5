function checkNotes() {
   document.getElementById("result").innerHTML = " ";
   var amnt = document.getElementById("number").value;

   var amount = amnt;

   var count = 0;

   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

      if (amnt >= 1) {


         if (amnt >= 500) {


            var note500 = Math.floor(amnt / 500);

            var amnt = amnt - (note500 * 500);
            document.getElementById("result").innerHTML += "There will be " + note500 + " 500 rupee note,";
         }

         if (amnt >= 200) {

            var note200 = Math.floor(amnt / 200);

            var amnt = amnt - (note200 * 200);
            document.getElementById("result").innerHTML += "There will be " + note200 + " 200 rupee note,";
         }
         if (amnt >= 100) {

            var note100 = Math.floor(amnt / 100);

            var amnt = amnt - (note100 * 100);
            document.getElementById("result").innerHTML += "There will be " + note100 + " 100 rupee note,";
         }
         if (amnt >= 50) {

            var note50 = Math.floor(amnt / 50);

            var amnt = amnt - (note50 * 50);
            document.getElementById("result").innerHTML += "There will be " + note50 + " 50 rupee note,";
         }

         if (amnt >= 20) {

            var note20 = Math.floor(amnt / 20);

            var amnt = amnt - (note20 * 20);
            document.getElementById("result").innerHTML += "There will be " + note20 + " 20 rupee note,";
         }

	if (amnt >= 10) {

            var note10 = Math.floor(amnt / 10);

            var amnt = amnt - (note10 * 10);
            document.getElementById("result").innerHTML += "There will be " + note10 + " 10 rupee note,";
         }
	


	if (amnt >= 5) {

            var note5 = Math.floor(amnt / 5);

            var amnt = amnt - (note5 * 5);
            document.getElementById("result").innerHTML += "There will be " + note5 + " 5 coin,";
         }
	if (amnt >= 2) {

            var note2 = Math.floor(amnt / 2);

            var amnt = amnt - (note2 * 2);
            document.getElementById("result").innerHTML += "There will be " + note2 + " 2 coin,";
         }
	if (amnt >= 1) {

            var note1 = Math.floor(amnt / 1);

            var amnt = amnt - (note1 * 1);
            document.getElementById("result").innerHTML += "There will be " + note1 + " 1 coin,";
         }

      } else {
         document.getElementById("result").innerHTML = "No Notes ";
      }


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}