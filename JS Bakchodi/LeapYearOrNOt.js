function LeapYearOrNot(year) {
  if (year % 4 === 0 && year % 100 == 0 && year % 400) {
    console.log("Leap year.");
  } else if (year % 4 == 0 && year % 100 === 0) {
    console.log("Not leap year.");
  } else if (year % 4 == 0) {
    console.log("Leap year.");
  } else {
    console.log("Not leap year.");
  }
}

LeapYearOrNot(2016);
