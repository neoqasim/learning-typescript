
//| ------------ union  type ---------------

// let tax: number | string = 10;
// console.log("Tax value :", tax);
// tax = "10";
// if (tax) {
//     console.log("Tax amount :", parseInt(tax) * 25 / 100);
// } else {
//     console.error("Invalid Tax Value");
// }


// ------------ custom  type ---------------

// let result: "pending" | "success" | "failed" = "pending";
// result = "pending"
// if (result = "success") {
//     console.log(result + " transaction is successful!");
// }
// else if (result = "pending") {
//     console.log(result + " transaction is pending!")
// } else {
//     console.log(result + "transaction is failed");
// }

// --- challenge for  the  orderStatus using custom types --

// let orderStatus: "processing" | 'delivered' | 'canceled' = "processing";
// let discount: number | string = 20



// -----------  Type inference in (forOf)  loop ------------------
// const books = ['tim cook', 'antons', 'Jhoward']
// let requiredBook: string | undefined
// for (const book of books) {
//     if (book === books[2]) {
//         requiredBook = book
//         requiredBook = requiredBook.toUpperCase();
//         break;
//     }
// }
// console.log(requiredBook);
// console.log(requiredBook?.length); // here the ? is emportant bcz ts will notice that it is undefined or not


// --------------- array Types and union  types for Arrays ----------------------

// let prices: number[] = [25, 45, 75, 120]
// prices.forEach((price) => {
//     price > 50 ? console.log(`${price} is a high priced item`) : console.log(`${price} is a low priced item`);
//     if (typeof price !== 'number') {
//         throw new Error('Array should contain only numbers');
//     }
// })
// console.log("All elements are numbers")

// let mixArray: (string | number | boolean)[] = ['qasim', 21, 'Sara', true];

// let temperature: number[] = [36.5, 38];
// let colors: string[] = ['red ', 'blue', 'green'];


// if (typeof temperature[0] === 'number') {
//     console.log(`The current temprature is ${temperature[0]} degree`);
// } else {
//     console.log(`The current weather status is ${temperature[0]}`);
// }