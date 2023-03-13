//Javascript Destructuring
const ay = [7,6,5,4,3,2,20];

//destructure first two items from a
const [b,c] = ay;

console.log(b,c);
console.log(ay);

const [lol,e,d] = ay;

console.log(lol,e,d);
console.log(d);
console.log(d,b,lol);


const[bacon, ...rest] = ay;
console.log(rest);
console.log(bacon, rest);


//object destructure time
const someObject = {
    z: 'panda', 
    y: 'snake', 
    x: 'octopus', 
    w: ['cat', 'lion']
};

const {z,w,x} = someObject;
console.log(z,w,x); 

//default values
const {happy, day = 42, my = "my precious", guy} = {};
const [lolzers = 21] = [];

console.log(happy,day,my,guy,lolzers);

//reassigning variables
let boy = ["male", "xy chromosomes"];
console.log(boy);
boy = ["female", "xy chromosomes"];

console.log(boy);
