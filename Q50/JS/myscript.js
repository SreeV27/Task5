function addition() {
   document.getElementById("result").innerHTML = " ";
   var fno = parseInt(document.getElementById("fno").value);
   var sno = parseInt(document.getElementById("sno").value);


	 if ((document.getElementById("fno").value != null) && (document.getElementById("fno").value != "")&&(document.getElementById("sno").value != null) && (document.getElementById("sno").value != "")) {
var result=fno+sno;
document.getElementById("result").innerHTML ="Result=" +result;

}
else{
document.getElementById("result").innerHTML ="";

}


}



function subtraction(){
 document.getElementById("result").innerHTML = " ";
   var fno = parseInt(document.getElementById("fno").value);
   var sno = parseInt(document.getElementById("sno").value);


	 if ((document.getElementById("fno").value != null) && (document.getElementById("fno").value != "")&&(document.getElementById("sno").value != null) && (document.getElementById("sno").value != "")) {
var result=fno-sno;
document.getElementById("result").innerHTML ="Result=" +result;

}
else{
document.getElementById("result").innerHTML ="";

}


}

function multiplication(){
 document.getElementById("result").innerHTML = " ";
   var fno = parseInt(document.getElementById("fno").value);
   var sno = parseInt(document.getElementById("sno").value);


	 if ((document.getElementById("fno").value != null) && (document.getElementById("fno").value != "")&&(document.getElementById("sno").value != null) && (document.getElementById("sno").value != "")) {
var result=fno*sno;
document.getElementById("result").innerHTML ="Result=" +result;

}
else{
document.getElementById("result").innerHTML ="";

}


}



function division(){
 document.getElementById("result").innerHTML = " ";
   var fno = parseInt(document.getElementById("fno").value);
   var sno = parseInt(document.getElementById("sno").value);


	 if ((document.getElementById("fno").value != null) && (document.getElementById("fno").value != "")&&(document.getElementById("sno").value != null) && (document.getElementById("sno").value != "")) {

if(sno == 0){

document.getElementById("result").innerHTML ="Second number should be greater than 0";


}
else{
var result=fno/sno;
document.getElementById("result").innerHTML ="Result=" +result;
}





}
else{
document.getElementById("result").innerHTML ="";

}


}













function displayDiv(){

var x=document.getElementById("menu");
  x.style.display = "block";
}


function exit(){
document.getElementById("fno").value ="";
document.getElementById("sno").value ="";
document.getElementById("result").innerHTML ="";
var x=document.getElementById("menu");
  x.style.display = "none";
}