//search the table function works in the search bar
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");//gets the users input
    filter = input.value.toUpperCase();//convert the user input to upper case to make it easier to search for
    table = document.getElementById("TaskTable");//gets the table name
    tr = table.getElementsByTagName("tr");//gets the table itself
    for (i = 0; i < tr.length; i++) {//for loop to search the table
      td = tr[i].getElementsByTagName("td")[1];//searches the table names for the characters
      if (td) {
        txtValue = td.textContent || td.innerText; //gets the table content and text
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//converts it to upper case
          tr[i].style.display = "";//removes the ones that don't match the text
        } else {
          tr[i].style.display = "none";//if none is found don't change the table
          searchTable2() //if it's not found it calls the next function that searches the description
        }
      }       
    }
  }


function searchTable2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");//gets the users input
  filter = input.value.toUpperCase();//convert the user input to upper case to make it easier to search for
  table = document.getElementById("TaskTable");//gets the table name
  tr = table.getElementsByTagName("tr");//gets the table itself
  for (i = 0; i < tr.length; i++) {//for loop to search the table
    td = tr[i].getElementsByTagName("td")[2];//searches the table descriptions for the characters
    if (td) {
      txtValue = td.textContent || td.innerText; //gets the table content and text
      if (txtValue.toUpperCase().indexOf(filter) > -1) {//converts it to upper case
        tr[i].style.display = "";//removes the ones that don't match the text
      } else {
        tr[i].style.display = "none";//if none is found don't change the table
      }
    }       
  }
}
