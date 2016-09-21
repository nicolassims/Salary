/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary New javascript code. || created: 09.20.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let totalSales, baseSalary, commissionRate, totalPay;

function main() {
    setTotalSales();
    setBaseSalary();
    setCommissionRate();
    setTotalPay();
    printTotalPay();
}

main();

function setTotalSales() {
    totalSales = PROMPT.question('How much $$$ have you made in sales?\n');
}

function setBaseSalary() {
    baseSalary = PROMPT.question('How much is your base salary?\n');
}

function setCommissionRate() {
    commissionRate = PROMPT.question('How much is your commission rate?\n');
}

function setTotalPay() {
    totalPay = totalSales * commissionRate - -baseSalary;
}

function printTotalPay() {
    console.log('Your total pay is $' + totalPay + '.')
}

