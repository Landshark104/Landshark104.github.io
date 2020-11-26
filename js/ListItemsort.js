function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("TaskTable");//get that table to sort through
	switching = true;
	dir = "asc"; //Set the sorting direction to ascending:
	while (switching) {//Make a loop that will continue until no switching has been done:
	  switching = false;
	  rows = table.rows;
	  for (i = 1; i < (rows.length - 1); i++) { //Loop through all table rows (except the first, which contains table headers):
		shouldSwitch = false;
		x = rows[i].getElementsByTagName("TD")[n]; //Get the two elements you want to compare, one from current row and one from the next:
		y = rows[i + 1].getElementsByTagName("TD")[n];
		if (dir == "asc") {//check if the two rows should switch place, based on the direction, asc or desc:
		  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
			shouldSwitch= true;//if so, mark as a switch and break the loop:
			break;
		  }
		} else if (dir == "desc") {
		  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
			shouldSwitch = true;//if so, mark as a switch and break the loop:
			break;
		  }
		}
	  }
	  if (shouldSwitch) {
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//If a switch has been marked, make the switch and mark that a switch has been done:
		switching = true;
		switchcount ++;//Each time a switch is done, increase this count by 1:      
	  } else {
		if (switchcount == 0 && dir == "asc") {//If no switching has been done AND the direction is "asc",set the direction to "desc" and run the while loop again.
		  dir = "desc";
		  switching = true;
		}
	  }
	}
  }