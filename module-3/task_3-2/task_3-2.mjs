"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let line1 = "";
for (let i = 1; i <= 10; i++) {
    line1 += i + " ";
}

let line2 = "";
for (let i = 10; i >= 1; i--) {
    line2 += i + " ";
}

printOut(line1);
printOut(line2);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let correctNumber = 45;
let GuessNumber = 0;

while (GuessNumber !== correctNumber){
    GuessNumber = Math.floor(Math.random() * 60) + 1;
}
 
printOut(`The number is: ${GuessNumber}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

let correctNumber3 = 210722; 
let GuessNumber3 = 0;
let attempts = 0;

let startTime = Date.now();

while (GuessNumber3 !== correctNumber3){
    GuessNumber3 = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}

let endTime = Date.now();

printOut (`The number is: ${GuessNumber3}`);
printOut (`It took ${attempts} attempts to guess the correct number.`);
printOut (`It took ${endTime - startTime} milliseconds to guess the correct number.`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

let prime = "";
for (let i = 2; i <= 200; i++) { 
    let isPrime = true;
    let j = i - 1;
    while (isPrime && j > 1) {
        if (i % j === 0) {
            isPrime = false;
        }
        j--;
    }
    if (isPrime === true) {
        prime += i + " ";
    }
}

printOut(prime);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

for (let row = 1; row <= 7; row++) {
    let line = "";
    
    for (let colums =1; colums <= 9; colums++){
        line += "K" + colums + "R" + row + " ";
    
    }
    
    printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

for (let i = 1; i <= 5; i++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let percent = (points / 236) * 100;
    let grade = "";

    if (percent >= 89) {
        grade = "A";
    } else if (percent >= 77) {
        grade = "B";
    } else if (percent >= 65) {
        grade = "C";
    } else if (percent >= 53) {
        grade = "D"; 
    } else if (percent >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    printOut("Student " + i + ": " + points + " points - Grade: " + grade);
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function matchString(aString, aNumber) {
    let count = 0;

    for (let i = 0; i < aString.length; i++) {
        if (aString[i] == aNumber) {
            count++;
        }
    }

    return count;
}

//full straight

let StraightFound = false;
let straightThrows = 0;

while (!StraightFound) {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let d5 = Math.floor(Math.random() * 6) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;

    straightThrows++;

    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    let c1 = matchString(diceString, 1);
    let c2 = matchString(diceString, 2);
    let c3 = matchString(diceString, 3);
    let c4 = matchString(diceString, 4);
    let c5 = matchString(diceString, 5);
    let c6 = matchString(diceString, 6);

    const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    if (countString === "111111") {
        StraightFound = true;
    }
}

 printOut ("Full straight!: " + straightThrows + " throws");

//3 pairs

let pairsFound = false;
let PairsThrows = 0;

while (!pairsFound) {   
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let d5 = Math.floor(Math.random() * 6) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;

    PairsThrows++;

    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    let c1 = matchString(diceString, 1);
    let c2 = matchString(diceString, 2);
    let c3 = matchString(diceString, 3);
    let c4 = matchString(diceString, 4);
    let c5 = matchString(diceString, 5);
    let c6 = matchString(diceString, 6);

    const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    if (matchString(countString, 2) === 3) {
        pairsFound = true;
    }
}
    
printOut("3 pairs!: " + PairsThrows + " throws");

//tower

let towerFound = false;
let towerThrows = 0;

while (!towerFound) {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let d5 = Math.floor(Math.random() * 6) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;

    towerThrows++;

    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    let c1 = matchString(diceString, 1);
    let c2 = matchString(diceString, 2);
    let c3 = matchString(diceString, 3);
    let c4 = matchString(diceString, 4);
    let c5 = matchString(diceString, 5);
    let c6 = matchString(diceString, 6);

    const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    if (matchString(countString,4)=== 1 && matchString(countString,2)=== 1) {
        towerFound = true;
    }
}

printOut("Tower!: " + towerThrows + " throws");

//Yahtzee

let yahtzeeFound = false;   
let yahtzeeThrows = 0;

while (!yahtzeeFound) {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let d5 = Math.floor(Math.random() * 6) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;

    yahtzeeThrows++;

    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    let c1 = matchString(diceString, 1);
    let c2 = matchString(diceString, 2);
    let c3 = matchString(diceString, 3);
    let c4 = matchString(diceString, 4);
    let c5 = matchString(diceString, 5);
    let c6 = matchString(diceString, 6);

    const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    if (matchString(countString,6)=== 1) {
        yahtzeeFound = true;
    }
}

printOut ("Yahtzee!: " + yahtzeeThrows + " throws");


printOut(newLine);
