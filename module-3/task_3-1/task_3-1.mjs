"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

const wakeUpTime = 8;
const time = 7;
if (wakeUpTime === time) {
    printOut("Take the bus!");
 }else if (wakeUpTime === 8){
    printOut("Take the train!");
}else 
    printOut("Take the car!"); 

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

const part4Number = -1;
if (part4Number > 0) {
    printOut("The number is positive.");
}else if (part4Number < 0){
    printOut("The number is negative.");
    }else {
    printOut("The number is zero.");
}


printOut(newLine);

printOut("--- Part 6, 7----------------------------------------------------------------------------------------------");
const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8 ) + 1
printOut (`image User Size: ${imageUserSize}`);
if (imageUserSize >= imageMinSize){
    if (imageUserSize < imageMaxSize){ 
        printOut("Thank you");
    }else {
        printOut("Image is too large");
    }
    } else {
        printOut("Image is too small!");
    }

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "Mars", "April", "Mai", "June", "Juli", "August", "September", "October", "November", "December"];

const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut(monthName)
if (monthName.includes("r")){
    printOut("You need to take vitamin D")
}else { 
printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

switch (monthName){ 
    case "January":
    case "Mars":
    case "Mai":
    case "Juli":
    case "August":
    case "October":
    case "December":
        printOut ("This month has 31 days")
        break;

    case "April":
    case "June":
    case "September":
    case "November":
        printOut ("This month has 30 days")
        break;
    
    case "February":
        printOut ("This month has 28 days")
        break; 
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if (monthName === "Mars" || monthName === "Mai"){      
    printOut ("The gallery is temporarily closed");
} else if (monthName === "April"){     
    printOut ("The gallery is temporarily open next door");  
} else { 
    printOut ("Welcome to the gallery!");
}

printOut(newLine)
