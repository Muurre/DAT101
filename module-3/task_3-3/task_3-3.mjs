"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function showDate() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    printOut("Dagens dato er: " + norwegianDate);
}

showDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function showDate2() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
    day: "numeric"
});

    printOut("Dagens dato er: " + norwegianDate);
    return today;
}

const currentDate = showDate2();
function daysUntil2XKO(today) {
    const releaseDate = new Date(2025,4,14);
    const difference = releaseDate - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}

 const daysLeft = daysUntil2XKO(currentDate);

 if (daysLeft > 0) {
    printOut("Det er " + daysLeft + " dager igjen til 2XKO!");
} else if (daysLeft === 0) {
    printOut("2XKO lanseres i dag!");
} else {
    printOut("Det er " + Math.abs(daysLeft) + " dager siden 2XKO sin lanseringsdato!");
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

function circleInfo(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter is: " + diameter);
    printOut("Circumference is: " + circumference.toFixed(2));
    printOut("Area is: " + area.toFixed(2));
}

circleInfo(8);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function rectangleInfo(rectangle) {
    const length = rectangle.length;
    const width = rectangle.width;

    const area = length * width;
    const circumference = 2 * (length + width);

    printOut("Area is: " + area);
    printOut("Circumference is: " + circumference.toFixed(2));
}

rectangleInfo({length: 5, width: 10});

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function convertTemperature(temperature, type) {
    if (type === "C") {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;

        printOut("Convert " + temperature + " degrees Celcius to Fahrenheit and Kelvin");
        printOut("Celcius = " + temperature);
        printOut("Fahrenheit = " + Math.round(fahrenheit));
        printOut("Kelvin = " + Math.round(kelvin));

} else if (type === "F") {
        const celcius = (temperature - 32) * 5/9;
        const kelvin = celcius + 273.15;    
        
        printOut("Convert " + temperature + " degrees Fahrenheit to Celcius and Kelvin");
        printOut("Fahrenheit = " + temperature);
        printOut("Celcius = " + Math.round(celcius));
        printOut("Kelvin = " + Math.round(kelvin));

    } else if (type === "K") {
        const celcius = temperature - 273.15;
        const fahrenheit = (celcius * 9/5) + 32;

        printOut("Convert " + temperature + " degrees Kelvin to Celcius and Fahrenheit");
        printOut("Kelvin = " + temperature);
        printOut("Celcius = " + Math.round(celcius));
        printOut("Fahrenheit = " + Math.round(fahrenheit));
     }
}

convertTemperature(47, "C");
printOut(newLine);
convertTemperature(100, "F");
printOut(newLine);
convertTemperature(300, "K");  

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calculateNetPrice(gross,group) {
    group = group.toLowerCase();

    let vat = 0;
    if (group === "normal"){
        vat = 25;
    } else if (group === "food") {
        vat = 15;
    } else if ( 
        group ===  "hotel" ||
        group === "transport" ||
        group === "cinema"  
    ){  
        vat = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }
    let net = (100 * gross) / (100 + vat);
    return net; 
}

printOut("100 is " + calculateNetPrice(100, "normal").toFixed(2) + " without tax"); 
printOut("150 is " + calculateNetPrice(150, "food").toFixed(2) + " without tax");
printOut("50 is " + calculateNetPrice(50, "hotel").toFixed(2) + " without tax");
calculateNetPrice(100, "goblins")

printOut(newLine); 

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function calculateSpeed(speed, distance, time) {
    
    let missing = 0;
    if (speed === undefined) missing++;
    if (distance === undefined) missing++;
    if (time === undefined) missing++;
    if (missing > 1){  
        return NaN; 
    }
   
    if (speed === undefined) {
        return distance / time;
    } else if (time === undefined) {
        return distance / speed;
    } else if (distance === undefined) {
        return speed * time;
    } else {
        return NaN; 
}
}

printOut("speed =" + calculateSpeed(undefined, 150, 2) + " km/h");
printOut("Time =" + calculateSpeed(75, 150, undefined)+ " hours");
printOut("distance =" + calculateSpeed(75, undefined, 2) + " km");
printOut ("missing values =" + calculateSpeed(undefined, undefined, 2));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function extendText(text, maxLength, character, before){
    while (text.length < 50) {  
        if (before === true){   
            text = character + text; 
        } else {    
            text = text + character; 
        }
    }

    return text; 
}

printOut(extendText("This is a text", 50, "*", false));
printOut(extendText("This is a text", 50, "*", true));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

function testMaths() {
    for (let line = 1; line <= 200; line++) {
        let start = line * line;
        let leftSum = 0;

        for (let i = 0; i <= line; i++) {
            leftSum += start + i;
        }

        let rightSum = 0;

        for (let i = 0; i < line; i++) {
            rightSum += start + line + 1 + i;
        }

        if (leftSum !== rightSum) {
            printOut("Error on line " + line);
            break;
        }

        if (line === 200) {
            printOut("Maths fun!");
        }
    }
}

testMaths();

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(number){
    if (number === 0 || number === 1){
        return 1;
    }

    return number * factorial(number - 1); 
}

printOut("Factorial(9) is " + factorial(9));

printOut(newLine);
