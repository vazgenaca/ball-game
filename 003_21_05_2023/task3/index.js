const arr = [
  "Herbert",
  "Cary",
  "Yvette",
  "Jeramie",
  "Lelia",
  "Jamel",
  "Daron",
  "Darius",
  "Adrienne",
  "Alfonso",
  "Jayde",
  "Soledad",
  "Jessie",
  "Emmy",
  "Mallory",
  "Pink",
  "Assunta",
  "Irma",
  "Julius",
  "Casimer",
];
function getRandomName() {
    const index = Math.round(Math.random() * (arr.length  - 1));
    return arr[index];
}


const generateBtn = document.getElementById("generateBtn");
const sortById = document.getElementById("sortById");
const sortByName = document.getElementById("sortByName");
const tableBody = document.getElementById("tableBody");

let counter = 1;
function createRow() {
  const tr = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdName = document.createElement("td");
  tdId.innerHTML = counter;
  tdName.innerHTML = getRandomName();
  tr.appendChild(tdId)
  tr.appendChild(tdName)
  tableBody.appendChild(tr);
  counter++;
}

generateBtn.addEventListener("click", () => {
    alert('Should generate new row');
});

sortById.addEventListener("click", () => {
    alert('Should sort by id');
}); 

sortByName.addEventListener("click", () => {
    alert('Should sort by name');
});

