function middleChar() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")) {

  var length= str.length;
var middle= Math.floor(length/2);


if(length ==1 ){

 document.getElementById("result").innerHTML = "Middle Character is " + (str.charAt(0));

}
else{

if(length%2!=0 ){
document.getElementById("result").innerHTML = "Middle Character is " + (str.charAt(middle));

}

   else {
      document.getElementById("result").innerHTML = "No perfect middle character for the given string";

   }   


}






   } else {
      document.getElementById("result").innerHTML = " ";

   }


}