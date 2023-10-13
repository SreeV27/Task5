function ascii() {
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;

  

   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "")  ) {

for(var i=0;i<(str.length) ;i++)
{

 document.getElementById("result").innerHTML += " <br>"+str.charAt(i)+"-"+str.charCodeAt(i);
}



   } else {
      document.getElementById("result").innerHTML = " ";

   }


}