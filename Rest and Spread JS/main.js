
//When we don't know how many parameters to pass
function sum(...args) { 
    let total = 0;

    for(let i in args){
        total += args[i]
    }

    return total;
}
console.log("The sum is")
console.log(sum(9,12,-3,27,2,33,-10));



//shopping at a store
function purchaseTotal(...themItems) {
    let total = 0;
    
    for(let i in themItems) {
        total += themItems[i]
    }
    return total;
}

let soap = 3.5;
let protienShakeSingle = 4;
let sleepGummySample = 3;
let toothpaste = 3.43;
let doubleX = 56;
let protienPowder = 36;

console.log("The shopping total is: $" + purchaseTotal(soap,toothpaste,doubleX));


function people(name, ...moreNames) {
    console.log("Praying for "+name, moreNames.join(" "));
}


people("Jordan","Bryli","Joseph","Colter","Taylin");



//using spread
let disHuuuuuugeArray = [21,4,5,6,3,4,2.1,9,12.4];
console.log("Each number displayed separately is");
console.log(...disHuuuuuugeArray);




function display(theKey, theValue) {
    return{key: theKey, value: theValue};
}

const someDictionary = display(...["this is the key", "this is the value"]);
console.log(someDictionary);