function reverseVowels() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

      const strArray = str.split('');

      // Define a set of vowel characters
      const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

      // Initialize two pointers for reversing the vowels
      let left = 0;
      let right = strArray.length - 1;

      while (left < right) {
         // Move the left pointer to the next vowel
         while (left < right && !vowels.has(strArray[left])) {
            left++;
         }

         // Move the right pointer to the previous vowel
         while (left < right && !vowels.has(strArray[right])) {
            right--;
         }

         // Swap the vowel characters
         [strArray[left], strArray[right]] = [strArray[right], strArray[left]];

         // Move the pointers towards each other
         left++;
         right--;
      }

      document.getElementById("result").innerHTML = "New string is " + strArray;


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}