export default class User { //putting export default on the front allows modules
    constructor(name,email) {
        this.name = name
        this.email = email
    }
}

//can only default export one thing, so it's usually the class

export function printName(user) {
    console.log(`User's name is ${user.name}`)
}


export function printEmail(user) {
    console.log(`Uer's email is ${user.email}`)
}

//export default User //can declare this right on the class instead
//export { printName, printEmail } //can declare this on the functions instead