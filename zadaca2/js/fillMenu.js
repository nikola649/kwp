
class Action {
    constructor (name, image, link)
    {
    this.name = name;
    this.image = image;
    this.link = link;
    }
}
var settingsImg={firstName:"./img/settings.png",alt: "settings ikona"};
var inventura_link = "./Inventura.html";
var inventura = new Action("Inventura", settingsImg, inventura_link);
var administracija = new Action("Administracija", settingsImg, "./Administracija.html");
var inventar = new Action("Inventar", settingsImg, "./Inventar.html");
var prostorije = new Action("Prostorije", settingsImg, "./Prostorije.html");
var zaposlenici = new Action("Zaposlenici", settingsImg, "./index.html");
//za zad.2 povezi s ovom funkcijom
window.onload = function makeList2() 
{
    // Establish the array which acts as a data source for the list
    var listaData2 = [
        inventura,
        inventar,
        prostorije,
        zaposlenici,
        administracija
    ];

    // Make a container element for the list
    //ovo mi nece trebat
   // var listContainer2 = document.getElementById("traka");

    var listContainer2 = document.createElement("div");

    // Add it to the page
    //ovo treba promjenit da iz prosljedjenog bude
    document.getElementById("traka").appendChild(listContainer2);

    // Make the list
    var listElement = document.createElement("ul");

    // Add it to the page
    listContainer2.appendChild(listElement);

    // Set up a loop that goes through the items in listItems one at a time
    var numberOfListItems = listaData2.length;

    for (var i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        var listItem = document.createElement("li");
        //isto i za sliku i za link
        // Add the item text
        var str = listaData2[i].name;
        var linked= str.link(listaData2[i].link);
        //listItem.innerHTML = listaData2[i].name;
        listItem.innerHTML = linked;
        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}
//stavit cu svima istu slicicu
// inventura_name = "Inventura";
// inventura_name.link("Inventura.html");
//var inventura_link = document.createElement('a');
//inventura_link.setAttribute('href',"'../Inventura.html");
//var inventura = new Action("Inventura", inventura_link);
//var actions = [inventura];

//nece mi ucitat obje za onload pa sam ih u isti fajl


