/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  // Using map to console.log all developers
  const developers = arr.filter(employee => employee.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log(developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  // Using forEach to console.log all developers
  const developerNames = [];
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      developerNames.push(employee.name);
    }
  });
  console.log(developerNames);
}

function addData() {
  //Write your code here, just console.log
 // const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  //arr.push(newEmployee);
 // console.log(arr);
 const newEmployee = {
  id: arr.length + 1,
  name: prompt("Enter name:"),
  age: prompt("Enter age:"),
  profession: prompt("Enter profession:")
};

arr.push(newEmployee);
console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedArray = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedArray);

}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "Alice", age: "22", profession: "designer" },
    { id: 6, name: "Bob", age: "25", profession: "manager" },
    { id: 7, name: "Eva", age: "23", profession: "developer" }
  ];

  arr = arr.concat(newArray);
  console.log(arr);
}
