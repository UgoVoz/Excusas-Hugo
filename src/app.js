/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuses();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuses = () => {
  let pronoun = ["A", "the"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * pronoun.length);
  let actionIndex = Math.floor(Math.random() * pronoun.length);
  let possetionIndex = Math.floor(Math.random() * pronoun.length);
  let whereIndex = Math.floor(Math.random() * pronoun.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
