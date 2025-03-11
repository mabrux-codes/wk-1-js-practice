// Challenge One
function getGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 49) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Example Usage:
const marks = parseInt(prompt("Enter student marks (0-100): "));
if (marks >= 0 && marks <= 100) {
    console.log(`Grade: ${getGrade(marks)}`);
} else {
    console.log("Invalid marks! Enter a number between 0 and 100.");
}


// Challenge Two
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example Usage:
const speed = parseInt(prompt("Enter car speed: "));
checkSpeed(speed);


//Challenge Three
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    // PAYE (Tax) Calculation
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        tax = grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        tax = grossSalary * 0.325;
    } else {
        tax = grossSalary * 0.35;
    }

    // NHIF Deductions (Based on different salary brackets)
    let nhif = 0;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    // NSSF Deduction (Standard Rate)
    let nssf = grossSalary * 0.06; // 6% of gross salary

    // Net Salary Calculation
    let netSalary = grossSalary - (tax + nhif + nssf);

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

// Example Usage:
const basicSalary = parseFloat(prompt("Enter Basic Salary: "));
const benefits = parseFloat(prompt("Enter Benefits: "));
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Tax (PAYE): ${salaryDetails.tax}`);
console.log(`NHIF Deduction: ${salaryDetails.nhif}`);
console.log(`NSSF Deduction: ${salaryDetails.nssf}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
