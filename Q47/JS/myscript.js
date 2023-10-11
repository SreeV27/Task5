function volumeSphere() {
   document.getElementById("result").innerHTML = " ";
   var radius = parseInt(document.getElementById("number").value);
   


   if ((document.getElementById("number").value != null) && (document.getElementById("number").value != "")) {

	var sa= 4*Math.PI*Math.pow(radius,2);
	var volume=(4/3)*Math.PI*Math.pow(radius,3)
	document.getElementById("result").innerHTML = "Surface area of the sphere is "+sa+ "m&sup2;" +"<br> volume of the sphere is "+volume +"m&sup3;" ;
   } else {
      document.getElementById("result").innerHTML = " ";

   }


}