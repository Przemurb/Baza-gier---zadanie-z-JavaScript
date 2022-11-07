function registerAddButton() {
    let addButton = document.getElementById("submit-button");
    addButton.addEventListener("click", addToList)
}

function addToList() {
    let title = document.getElementById("title").value;
    let vote = document.getElementById("vote").value;
    let description = document.getElementById("description").value;
    if (title != "" & vote != "" & description != "") {
        createNewRow();
        clearForm();
    } else {
        document.getElementById("title").classList.add("input-error");
        document.getElementById("vote").classList.add("input-error");
        document.getElementById("description").classList.add("input-error");
    }



    function createNewRow() {
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
    }

    function clearForm() {
        document.getElementById("title").value = null;
        document.getElementById("vote").value = null;
        document.getElementById("description").value = null;
        document.getElementById("title").classList.remove("input-error");
        document.getElementById("vote").classList.remove("input-error");
        document.getElementById("description").classList.remove("input-error");
    }
}



registerAddButton();

function deleteFromList(r) {
    let table = document.getElementById("table");
    let i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}
