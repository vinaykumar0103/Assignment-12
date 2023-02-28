"use strict"

// 1. Write a JavaScript program to map Employee Records according to Employee
// IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees
// Sample Input:
// "id": [ 67, 48, 29 ]
// "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
// "salary": [ 75000, 82000, 98000 ]
// Output:
// [ 67, 48, 29 ]
// 3
// 67: Hitanshu
// 48: Ninad
// 29: Amandeep
// [ 75000, 82000, 98000 ]
// 85000

let employees = [
  { id: 1, name: 'John', salary: 50000 },
  { id: 2, name: 'Mary', salary: 60000 },
  { id: 3, name: 'Bob', salary: 55000 },
  { id: 4, name: 'Alice', salary: 65000 }
];

// a) Print an array of all employee ids
let ids = employees.map(employee => employee.id);
console.log(ids);

// b) Print count of employees
let count = employees.length;
console.log(count);

// c) Print the name of the employee according to their id { key: value }
let nameById = {};
employees.forEach(employee => {
  nameById[employee.id] = employee.name;
});
console.log(nameById);

// d) Store the salaries of all employees in an array
let salaries = employees.map(employee => employee.salary);
console.log(salaries);

// e) Calculate the average salary the company is paying to its employees
let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
let averageSalary = totalSalary / count;
console.log(averageSalary);


// 2. Write a program in JavaScript to map the student ids, names and scores.
// a) Add data for 3 students (use map functions)
// b) Get Student Names using map functions
// c) Delete Student Scores using map functions

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// Sample Input:
// "id": [ 1, 2, 3 ]
// "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// "scores": [ 90, 88, 92 ]
// Output:
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// -----one parameter-----
// [ 1, 2, 3 ]
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// [ 90, 88, 92 ]
// -----two parameter-----
// id 1, 2, 3
// name Hitanshu,Ninad,Amandeep
// scores 90,88,92
// -----three parameter-----
// id 1, 2, 3
// Map(3) {
// 'id' => [ 67, 48, 29 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// name Hitanshu,Ninad,Amandeep
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// scores 90,88,92
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }


// a) Add data for 3 students (use map functions)


let studentData = new Map();
studentData.set('id', [1, 2, 3]);
studentData.set('name', ['Hitanshu', 'Ninad', 'Amandeep']);
studentData.set('scores', [90, 88, 92]);
console.log(studentData);

// b) Get Student Names using map functions


let studentNames = studentData.get('name').map(name => name);
console.log(studentNames);


// c) Delete Student Scores using map functions

let deletedScores = studentData.get('scores').map(() => 'Score Deleted');
console.log(deletedScores);

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student


// 1 parameter
console.log(studentData.get('name'));

// 2 parameters
for (let [key, value] of studentData.entries()) {
  console.log(`${key}: ${value}`);
}

// 3 parameters
console.log('id', studentData.get('id'));
console.log(studentData);
console.log('name', studentData.get('name'));
console.log(studentData);
console.log('scores', studentData.get('scores'));
console.log(studentData);


// 3. Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Original Array = [ 1, 2, 3, 4, 5 ]
// New Array = [ 1, 4, 9, 16, 25 ]
// Mapping = squares => [ 1, 4, 9, 16, 25 ]
// Output:
// [ 1, 4, 9, 16, 25 ]

let originalArray = [1, 2, 3, 4, 5];

let squaresArray = originalArray.map(element => element * element);

let mapping = squaresArray.map(square => square);

console.log(mapping);

