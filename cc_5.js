let employees = [
    {name: "Alice", hoursWorked: 40, hourlyRate: 15},
    {name: "Bob", hoursWorked: 35, hourlyRate: 20},
    {name: "Charlie", hoursWorked: 45, hourlyRate: 17}
];

console.log("employees", employees);

function calculateBasePay(rate, hours) {
    const standardHours = 40;
    const baseHours = Math.min(hours, standardHours);
    return rate * standardHours;
}

console.log("calculateBasePay", calculateBasePay(15, 40));

function calculateOvertimePay(rate, hours) {
    const standardHours = 40;
    if (hours > standardHours) {
        const overtimeHours = hours - standardHours;
        return overtimeHours * rate * 1.5;
    }
    return 0;
}

console.log("calculateOvertimePay", calculateOvertimePay(15, 45));

function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}       

console.log("calculateTaxes", calculateTaxes(600));

function processPayroll(employee) {
        const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
        const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
        const grossPay = basePay + overtimePay;
        const taxes = calculateTaxes(grossPay);
        const netPay = grossPay - taxes;
        return {
            name: employee.name,
            basePay: basePay,
            overtimePay: overtimePay,
            grossPay: grossPay,
            netPay: netPay
        };
}

console.log("processPayroll", processPayroll({name: "test", hoursWorked: 45, hourlyRate: 20}));

for (let employee of employees) {
    console.log(processPayroll(employee));
}