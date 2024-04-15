{
    // ------------------ Check that name is in list or not -------------
    // const names: string[] = ["Max", "John", "Jon"];


    // function isNameInList(name: string): boolean {
    //     return names.includes(name);
    // }
    // const userName = "jonpo";
    // if (isNameInList(userName)) {
    //     console.log(`${userName} is in the list`);
    // } else {
    //     console.log(`${userName} is not in the list`);
    // }
}

const calaculateDiscount = (price: number, discount: number) => {
    return price - discount;
}

let priceAfterDiscount = calaculateDiscount(3000,470);
console.log(priceAfterDiscount);