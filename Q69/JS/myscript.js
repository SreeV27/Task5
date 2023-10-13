function reverseVowels() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

      const stack = [];
      const openBrackets = '({[';
      const closeBrackets = ')}]';
      var length = 0;

      for (let char of str) {
         if (openBrackets.includes(char)) {
            // Push opening brackets onto the stack
            stack.push(char);
         } else if (closeBrackets.includes(char)) {
            // Check if the stack is empty or if the top of the stack matches the current closing bracket
            const topOfStack = stack.pop();
            if (!topOfStack || openBrackets.indexOf(topOfStack) !== closeBrackets.indexOf(char)) {
               document.getElementById("result").innerHTML = "Not Valid"; // Mismatched closing bracket or stack underflow
               length = 1;
               break;
            }
         }
      }

      if (length === 0) {

         document.getElementById("result").innerHTML = "Valid!";


      }

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}