function monthlySavings(arr, livingCost) {

    if(!Array.isArray(arr) && typeof livingCost !== "number"){
        return "invalid input"
    }
    totalSalary = 0;
    tax = 0;
    for (const salary of arr) {
        if (salary >= 3000) {
            tax = salary * (20 / 100)
        }
        totalSalary += salary

    }
    savings = totalSalary - (livingCost + tax)
    if (savings < 0){
        return "earn more"
    }
        return savings
}

console.log(monthlySavings([1000, 2000, 3000], 5400))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))