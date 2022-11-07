class Game {
    constructor(title, vote, description) {
        this.title = title;
        this.vote = vote;
        this.description = description;
    }
}

let games = [];


function registerAddButton() {
    let addButton = document.getElementById("submit-button");
    addButton.addEventListener("click", addToList)
}

function addToList() {
    let title = document.getElementById("title").value;
    let vote = document.getElementById("vote").value;
    let description = document.getElementById("description").value;
    clearDescription();
    if (title != "" & vote != "" & description != "") {
        createNewRow();
        saveGame();
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
        cell3.innerHTML = "<button id='details-button' onclick='showDescription(this)'>Pokaż szczegóły</button>";
        cell4.innerHTML = "<button id='remove-button' onclick='deleteFromList(this)'>Usuń</button>";
    }

    function saveGame() {
        games.push(new Game(title, vote, description));
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
    games.splice(i-1, 1);
    table.deleteRow(i);
}

function showDescription(d) {
    let i = d.parentNode.parentNode.rowIndex;
    let details = games[i - 1];
    document.getElementById("details").innerHTML = 'Opis gry "' + details.title + '": ' + details.description;
    // setTimeout(() => clearDescription(), 5000);
}

function clearDescription() {
    document.getElementById("details").innerHTML = "";
}

// function addExample() {
//     games.push(new Game("Wiedźmin 3", 10, "Fantastyczna gra o walce z potworami i jeżdzeniu na koniu."));
//     games.push(new Game("Starcraft", 7, "Walki kosmitów i różnych ras."));
//     games.push(new Game("The Sims", 8, "Buduj domy, rozwijaj relacje. Prawdziwe życie w realnym świecie."));
// }