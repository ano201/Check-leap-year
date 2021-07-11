function checkLeapYear() {
  var year = document.getElementById("yearInput").value;
  if (year == "") {
    document.getElementById("output").innerHTML = "Please enter A year...."
  }else if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    document.getElementById("output").innerHTML = year + ' is a leap year';
  }else {
    document.getElementById("output").innerHTML = year + ' is not a leap year';
    }
}