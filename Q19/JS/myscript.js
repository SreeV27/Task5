function append(value) {
   document.getElementById("ValueField").value += value;

}

function clearBox() {
   document.getElementById("ValueField").value = " ";

}

function finalResult() {

   try {

      if (document.getElementById("ValueField").value != null) {

         var result = eval(document.getElementById("ValueField").value);
         document.getElementById("ValueField").value = result;
      }
   } catch (error) {
      document.getElementById("ValueField").value = Error;
   }


}