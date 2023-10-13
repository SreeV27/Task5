function findDayOfWeek() {

   var dateInput = document.getElementById("dateInput").value;
   //convert String date to Date Object
   var selectedDate = new Date(dateInput);
   const dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   // Get the day of the week as a number (0-6)
   var dayOfWeekNumber = selectedDate.getDay();

   // Get the corresponding day name
   var dayOfWeekName = dayOfWeekNames[dayOfWeekNumber];
   document.getElementById("result").innerHTML = dayOfWeekName;
}