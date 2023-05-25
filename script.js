function calculateAverage() {
  var table = document.getElementById("marksTable");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var cells = row.getElementsByTagName("td");

      // Get marks for each subject
      var subject1 = parseFloat(cells[1].innerHTML);
      var subject2 = parseFloat(cells[2].innerHTML);
      var subject3 = parseFloat(cells[3].innerHTML);

      // Calculate average
      var average = (subject1 + subject2 + subject3) / 3;

      // Calculate average + 10
      var averagePlus10 = average + 10;

      // Update the table cell with the calculated value
      cells[4].innerHTML = averagePlus10.toFixed(2);
  }
}

// Dynamically create rows for 52 students
var table = document.getElementById("marksTable");

for (var i = 0; i < 52; i++) {
  var row = document.createElement("tr");

  var studentCell = document.createElement("td");
  studentCell.innerHTML = "Roll-No: " + (i + 1);
  row.appendChild(studentCell);

  for (var j = 0; j < 3; j++) {
      var marksCell = document.createElement("td");
      marksCell.contentEditable = true; // Allow user input
      marksCell.innerHTML = ""; // Initial empty value
      row.appendChild(marksCell);
  }

  var averagePlus10Cell = document.createElement("td");
  averagePlus10Cell.innerHTML = ""; // Initial empty value
  row.appendChild(averagePlus10Cell);

  table.appendChild(row);
}
