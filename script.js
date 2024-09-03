function myFunction() {
  let week = prompt("How many weeks do you have left in school?");
  if (week == 0) {
    document.getElementById("demo").innerHTML =
    week + " " + "weeks?" + " " + "Congrats! You have finished school!";
  } 
    else if (week == 1) {
      document.getElementById("demo").innerHTML =
      week + " " + "week?" + " " + "Nearly there!";
  } 
    else if (week == 2) {
      document.getElementById("demo").innerHTML =
      week + " " + "weeks?" + " " + "Still learning!";
  } 
    else if (week == 3) {
      document.getElementById("demo").innerHTML =
      week + " " + "weeks?" + " " + "Sucks to be you:)";
  } 
    else if (week >= 4) {
      document.getElementById("demo").innerHTML =
      week + " " + "weeks?" + " " + "I hope you are kidding...";
  }
    else if (isNaN(week)) {
      document.getElementById("demo").innerHTML =
      week + " " + "is not a number of weeks" + " " + "press the button again";
  }
  }