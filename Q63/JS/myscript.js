function findPrefix(){
   document.getElementById("result").innerHTML = " ";
   var str = document.getElementById("string").value;
	var word = document.getElementById("word").value;
	


   if ((document.getElementById("string").value != null) && (document.getElementById("string").value != "") && (document.getElementById("word").value != null) && (document.getElementById("word").value != "")) {

document.getElementById("result").innerHTML = "Old sentence is "+str;
var words=str.split(" ");



if(words[0] === word){
document.getElementById("result").innerHTML = "The word "+word+" is prefix of the given string";
}

else{

document.getElementById("result").innerHTML = "The word "+word+" is not prefix of the given string";
}






   

   } else {
      document.getElementById("result").innerHTML = " ";

   }


}