function createTable() {
  //Write your code here
const row = prompt("Input number of rows")
const column = prompt("Input number of column")
const table = document.getElementById("myTable")

let tr = ``;
for(let i = 0; i < row; i++){
  tr = `<tr>`
  for(let j = 0; j < column; j++){
    tr += `<td>Row-${i} Column-${j}</td>`
  }
  tr += `</tr>`
  table.innerHTML += tr
}
}
