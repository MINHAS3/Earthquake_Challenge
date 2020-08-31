// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
  
  function addition(a, b) {
    return a + b;
  }

  addition = (a, b) => a + b;

  function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  doubleAddition = (c, d)

  => addition(c, d) * 2;

  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
}

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
      
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 function buildTable(data) {

}

function buildTable(data) {
    tbody.html("");
  }

  data.forEach((dataRow) => {

});

let row = tbody.append("tr");

Object.values(dataRow).forEach((val) => {
});

let cell = row.append("td");

cell.text(val);

data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

  function handleClick() {
	let date = d3.select("#datetime").property("value");