function bytetoString() {
   document.getElementById("result").innerHTML = " ";
 
const byteNumbers = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
const byteArray = new Uint8Array(byteNumbers);
  
// Creating textDecoder instance 
let decoder = new TextDecoder("utf-8"); 
  
// Using decode method to get string output 
let str = decoder.decode(byteArray); 
  
document.getElementById("result").innerHTML = "Result string is "+str  ;
}