// ----------- functions and datatypes ------------------
// function printName(name: string) {
//     console.log(`hi my name is ${name}`);
// }
// const userName: string = "Qasim"

// printName(userName);

// function calaculateDiscountprice(price: number): number {
//     let hasDiscount = true
//     if (hasDiscount) {
//         return price
//     }
//     return price * 0.2
// }

// const discountedPrice = calaculateDiscountprice(200);
// console.log("discountedPrice :", discountedPrice);


// const names: string[] = ["muhammad", "qasim"]
// names.push("Ali")
// console.log(names);

// function nameChecker(name: string): boolean {
//     return names.includes(name)
// }

// const nameToCheck: string = "muhammad";
// if (nameChecker(nameToCheck)) {
//     console.log(nameToCheck + " is availble in the given list");
// } else {
//     console.log(nameToCheck + " is not availble in the given list");
// }
// ? console.log("yes it's in the array ") : console.log("no it's not in the array");

// function calculatePrice(price: number, discount: number): number {
//     return price - discount
// }

// let dicountedPrice = calculatePrice(1500, 300)
// console.log('dicounted Price', dicountedPrice)


// function sum(maessage: string, ...numbers: number[]) {
//     const doubled = numbers.map((num) => (num * 2))
//     console.log(doubled);

//     let total = numbers.reduce((prev, curr) => {
//         return prev + curr
//     }, 0)
//     return `${maessage} ${total} `

// }
// console.log(sum('the doubled result is ', 2, 4, 6, 8));

// ----------------------  type union function ----------------------------------
// function processInput(input: string | number) {
//     if (typeof input == "number") {
//         return input * 2
//     }
//     else {
//         return input.toUpperCase()
//     }
// }
// console.log(processInput('qasim'));

