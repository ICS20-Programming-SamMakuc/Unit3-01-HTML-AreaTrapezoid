// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // get hours worked and hourly rate from input fields
  let Sidea = parseInt(document.getElementById("sidea").value);
  let Sideb = parseInt(document.getElementById("sideb").value);
  let Height = parseInt(document.getElementById("height").value);
  
  // do math
  let area = (Sidea + Sideb) * Height / 2;
  area = area.toFixed(2);
  
  // display result back to user
  document.getElementById('salary-info').innerHTML = "The area of the trapezoid is " + area + "cm<sup>2</sup>.";
}
