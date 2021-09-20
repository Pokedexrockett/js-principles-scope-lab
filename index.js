// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'john';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    globalThis.bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer (){
    leastFavoriteCustomer = 'medow';
}

console.log(changeLeastFavoriteCustomer());