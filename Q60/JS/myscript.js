function printlength() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {
 var len= (str.length);


document.getElementById("result").innerHTML = "Length of string using function is "+len;

var length = 0;
var i = 0;
while(str[length] !== undefined) {
length++;
i++;
}
document.getElementById("result").innerHTML += "<br>Length of string without function is "+length;



      


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}