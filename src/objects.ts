// ---------------- object literal and types ------------------------

// let car: { name: string, model: number } = {
//     name: 'Tesla',
//     model: 21
// };
// let car1: { name: string, model: number } = {
//     name: 'audi',
//     model: 23
// };

// let book = { title: "book1", cost: 20 }
// let pen1 = { title: "pen", cost: 2 }
// let register = { title: "register", costs: 32 }
// let bag = { title: "leather", cost: 32 }

// for this we have two choices first is that we write it with one by one
// or secondly we can use type assertion with arrays

// here we  are saying that our array will contain objects which has same values
// let items: { readonly title: string, cost?: number }[] = [book, pen1, register];
// items[0].title = "2121" // error  because of read only property
// items.push({ title: "", cost: 90 });
// console.log(items);


