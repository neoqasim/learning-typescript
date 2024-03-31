
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

let result: "pending" | "success" | "failed" = "pending";
result = "pending"
if (result = "success") {
    console.log(result + " transaction is successful!");
}
else if (result = "pending") {
    console.log(result + " transaction is pending!")
} else {
    console.log(result + "transaction is failed");
}

