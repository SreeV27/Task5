function concatinate() {
   document.getElementById("result").innerHTML = " ";
   var str1 = document.getElementById("string1").value;
   var str2 = document.getElementById("string2").value;
  

   if ((document.getElementById("string1").value != null) && (document.getElementById("string1").value != "") && (document.getElementById("string2").value != null) && (document.getElementById("string2").value != "") ) {


document.getElementById("result").innerHTML = "Result string is "+(str1.concat(str2));


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}