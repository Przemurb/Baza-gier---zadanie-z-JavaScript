function registerAddButton () {
    let addButton = document.getElementById("submit-button");
    addButton.addEventListener("click", addToList)
}

function addToList() {
    let title = document.getElementById("title").value;
    let vote = document.getElementById("vote").value;
    let description = document.getElementById("description").value;

    let table = document.getElementById("table");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = title;
    cell2.innerHTML = vote;
    cell3.innerHTML = "<button id='details-button'>Pokaż szczegóły</button>";
    cell4.innerHTML = "<button id='remove-button'onclick='deleteFromList(this)'>Usuń</button>";
    
    clearForm();
}

function clearForm() {
    document.getElementById("title").value = null;
    document.getElementById("vote").value = null;
    document.getElementById("description").value = null;
}

registerAddButton();

// function registerRemoveButton() {
//     let removeButton = document.getElementById("remove-button");
//     removeButton.addEventListener("click", deleteFromList(this));
// }
function deleteFromList(r) {
    let table = document.getElementById("table");
    let i = r.parentNode.parentNode.rowIndex;
    debugger;
    table.deleteRow(i);
}

// registerRemoveButton();