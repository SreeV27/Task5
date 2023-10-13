function printChar() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {
 var len= (str.length);


document.getElementById("result").innerHTML = "Characters are ";


for(var i=0;i<len;i++){
document.getElementById("result").innerHTML += "'"+(str.charAt(i))+"',"


}



      


   } else {
      document.getElementById("result").innerHTML = " ";

   }


}