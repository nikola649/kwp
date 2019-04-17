// za sortiranje onaj kod iz pomocnog + ne next nego next by tag name svi dt
class Rooms {
    constructor (name, itemsCount)
    {
    this.name = name;
    this.itemsCount = itemsCount;
    }
}
var count = 50;
var first = new Rooms("Predavaonica1", count);
var second = new Rooms("Predavaonica2", count);
var third = new Rooms("Predavaonica3", count);
var forth = new Rooms("Predavaonica4", count);
var fifth= new Rooms("Predavaonica5", count);
var sixth = new Rooms("Predavaonica6", count);
var porta = new Rooms("Portirnica", count);
var referada = new Rooms("Referada", count);


//za zad.2 povezi s ovom funkcijom
window.onload=function makeList() 
{

    // Establish the array which acts as a data source for the list
    var listData = [
        first,
        second,
        third,
        forth,
        fifth,
        sixth,
        porta,
        referada
    ];

    // Make a container element for the list
    //ovo mi nece trebat
   // var listContainer = document.getElementById("traka");

    var listContainer = document.createElement("div");

    // Add it to the page
    document.getElementById("Predavaonice").appendChild(listContainer);

    // Make the list
    var listElement = document.createElement("dl");
    listElement.setAttribute("id", "mylist");
    // Add it to the page
    listContainer.appendChild(listElement);

    // Set up a loop that goes through the items in listItems one at a time
    var numberOfListItems = listData.length;

    for (var i = 0; i < numberOfListItems; ++i) {
        // create an item for each one 
        //ovo je za pred1, pred2
        var listItem = document.createElement("dt"); 
        // Add the item text
        listItem.innerHTML = listData[i].name;
            //broj predmeta:50
        var itemDescription = document.createElement("dd");
        itemDescription.innerHTML ="Broj predmeta: " + listData[i].itemsCount;

        // Add listItem to the listElement
        //ubacio i ovaj little da lakse sortiram al i dalje ne radi
        var little= document.createElement("dl");
        
        listElement.appendChild(little);
        little.appendChild(listItem );
        little.appendChild(itemDescription);
       
        // listElement.appendChild(listItem );
        //listElement.appendChild(itemDescription);
    }
}
var gumb = document.getElementById("order");
gumb.onclick= function sortList() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("mylist");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    
    gumb.innerHTML = "Poredaj po imenu ^";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("dt");
      console.log(b);
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Check if the next item should switch place with the current item,
        based on the sorting direction (asc or desc): */
        if (dir == "asc") {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            /* If next item is alphabetically lower than current item,
            mark as a switch and break the loop: */
            shouldSwitch = true;

            break;
          }
        } else if (dir == "desc") {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            /* If next item is alphabetically higher than current item,
            mark as a switch and break the loop: */
            shouldSwitch= true;

            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        // Each time a switch is done, increase switchcount by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          
          gumb.innerHTML = "Poredaj po imenu V ";
          switching = true;
        }
      }
    }
  }
//stavit cu svima istu slicicu
// inventura_name = "Inventura";
// inventura_name.link("Inventura.html");
//var inventura_link = document.createElement('a');
//inventura_link.setAttribute('href',"'../Inventura.html");
//var inventura = new Rooms("Inventura", inventura_link);
//var Roomss = [inventura];
