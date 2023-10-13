//Question 1
function helloWorldBtn() {
   document.getElementById("helloWorld").innerHTML = "Hello World";
}


//Question 2

function sum() {
   let x = parseInt(document.getElementById("firstnumber").value);
   let y = parseInt(document.getElementById("secondNumber").value);


   if (x == null || x == "") {
      document.getElementById("sum").innerHTML = "Enter all the Datas";

   } else {

      let z = x + y;
      document.getElementById("sum").innerHTML = "The Sum is " + z;
   }
}
//Question 3

function sumAndAvg() {
   let x = parseInt(document.getElementById("fno").value);
   let y = parseInt(document.getElementById("sno").value);
   let z = parseInt(document.getElementById("tno").value);
   let sum = x + y + z;
   let avg = sum / 3;
   document.getElementById("sumAvg").innerHTML = "The Sum is " + sum + " and Average is" + avg;
}

//Question 4

function simpleInterest() {
   let pa = parseInt(document.getElementById("pAmount").value);
   if (pa < 0) {
      document.getElementById("simpleInterest").innerHTML = "Please Enter a Valid Amount";

   } else {
      let sInterest = pa / 1000;
      document.getElementById("simpleInterest").innerHTML = "Your Simple Interest is:" + sInterest;
   }
}

//Question 5

function compundInterest() {
   let cpa = parseInt(document.getElementById("pa").value);
   let year = parseInt(document.getElementById("year").value);
   let iRate = parseInt(document.getElementById("iRate").value);
   if (pa < 0 || year < 1 || iRate < 0) {
      document.getElementById("compundInterest").innerHTML = "Please Enter a Valid Datas";

   } else {
      const compoundInterest = cpa * Math.pow(1 + iRate, year) - cpa;
      document.getElementById("compundInterest").innerHTML = "Your Compound Interest is:" + compoundInterest;
   }
}

//Question 6

function area() {

   let radius = parseInt(document.getElementById("radius").value);

   let area = Math.PI * Math.pow(radius, 2);
   document.getElementById("area").innerHTML = "Area is" + area;
}


//Question 7

function operations() {

   let x1 = parseInt(document.getElementById("firstNo").value);
   let x2 = parseInt(document.getElementById("secondNo").value);
   if (x2 == 0) {
      document.getElementById("result").innerHTML = "Second Number not eqaul to 0";
   } else {

      let sum1 = x1 + x2;
      let sub = x1 - x2;
      let pdt = x1 * x2;
      let dvd = x1 / x2;
      document.getElementById("result").innerHTML = " Sum=" + sum1 + "<br>Diiference=" + sub + "<br>Product=" + pdt + "<br>Division=" + dvd;
   }
}
//Question 8

function cube() {

   let no = parseInt(document.getElementById("num").value);
   let cube = Math.pow(no, 3);
   document.getElementById("cube").innerHTML = "Cube of the Number is " + cube;
}

//Question 9
function evenodd() {

   let no = parseInt(document.getElementById("anum").value);

   if (no % 2 == 0) {

      document.getElementById("evenOdd").innerHTML = "The Number is even";
   }

   if (no % 2 == 1) {
      document.getElementById("evenOdd").innerHTML = "The Number is Odd";
   }

}

//Question 10
function leapYear() {

   let yr = parseInt(document.getElementById("yrs").value);

   if (yr < 0) {
      document.getElementById("Lyear").innerHTML = "Enter a Valid year";

   } else if ((yr % 4 == 0 && yr % 100 != 0) || (yr % 400 == 0))

   {
      document.getElementById("Lyear").innerHTML = "Leap Year!";
   } else {
      document.getElementById("Lyear").innerHTML = "Not a leap year!";
   }
}


//Question 11
function swap() {
   var a = parseInt(document.getElementById("sfno").value);
   var b = parseInt(document.getElementById("ssno").value);
   var c = a;
   a = b;
   b = c;
   document.getElementById("swapResult").innerHTML = "First Numnber is:" + a + "<br>Second Number is :" + b;
}
//Question 12
function Power() {

   var num = parseInt(document.getElementById("pNo").value);
   var pwr = parseInt(document.getElementById("power").value);

   var rslt = Math.pow(num, pwr);
   document.getElementById("powerResult").innerHTML = "Result =" + rslt;
}
//Question 13
function sumOfDigits() {
   var num = parseInt(document.getElementById("digits").value);
   var sum = 0;
   while (num > 0) {
      var n = num % 10;
      sum = sum + n;
      num = Math.floor(num / 10);

   }

   document.getElementById("sumResult").innerHTML = "Sum of digits=" + sum;
}
//Question 14
function reverse() {
   var num = parseInt(document.getElementById("revNo").value);
   var rev = 0;
   while (num > 0) {
      var n = num % 10;
      rev = rev * 10 + n;
      num = Math.floor(num / 10);

   }

   document.getElementById("reverseResult").innerHTML = "Reverse of the Number=" + rev;
}

//Question 15
function largeAndSmallest() {
   var x = parseInt(document.getElementById("nof").value);
   var y = parseInt(document.getElementById("nos").value);
   var z = parseInt(document.getElementById("not").value);

   if (x > y && x > z) {
      var large = x;
   } else if (y > x && y > z) {
      var large = y;
   } else {
      var large = z;
   }

   if (x < y && x < z) {
      var smallest = x;
   } else if (y < x && y < z) {
      var smallest = y;
   } else {
      var smallest = z;
   }
   document.getElementById("largeAndSmallestResult").innerHTML = "Largerst Number is " + large + "and Smallest Number is " + smallest;

}


//Question 16
function primeOrNot() {

   var num = parseInt(document.getElementById("primeNo").value);
   var count = 0;


   for (var i = 1; i <= num; i++) {

      if (num % i == 0) {
         count = count + 1;
      }

   }
   if (count == 2) {
      document.getElementById("primeOrNotResult").innerHTML = "The number is Prime";
   } else {

      document.getElementById("primeOrNotResult").innerHTML = "The number is Not Prime";
   }
}


//Question 17

function eligibility() {

   var maths = (document.getElementById("math").value != "") ? parseInt(document.getElementById("math").value) : null; 
   var chemistry = (document.getElementById("chem").value != "")?parseInt(document.getElementById("chem").value) : null;
   var physics = parseInt(document.getElementById("phy").value);
   var total = maths + chemistry + physics;
   var mathsPhy = maths + physics;

   if (maths === null || chemistry === null || physics === null) {

      document.getElementById("eligibilityResult").innerHTML = "Please Enter Valid Marks";

   } else if ((maths >= 65 && chemistry >= 50 && physics >= 55) && (total >= 190 || mathsPhy >= 140)) {

      document.getElementById("eligibilityResult").innerHTML = "Your are Eligible";

   } else {
      document.getElementById("eligibilityResult").innerHTML = "Your are Not Eligible";


   }


}