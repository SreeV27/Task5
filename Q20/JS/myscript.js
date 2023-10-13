function printValues(i) {


   if (i <= 100)
      document.getElementById("values").innerHTML += " " + i;
   i++
   printValues(i);
}