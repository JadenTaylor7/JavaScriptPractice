//practicing the try method
//using this video for in depth explanatin of exceptions 
//https://www.youtube.com/watch?v=Z2l3cQ7bvBA


//Can use this to catch wierd emails
//Reason for try catches. If we have potentially dangerous code, we want to try it just in case
//user input could be dangerous code, because we don't know what the user will type.

//testing when try block is okay. Test's if user input is wrong
try{
    let ageQuestion = prompt("Enter your age: ");

    if(ageQuestion == "") throw "bruh, it's empty";
    if(ageQuestion == 42) throw "Congrats, you found the answer to life.";
    if(isNaN(ageQuestion)) throw "I'm sorry, " + ageQuestion + "needs to be a number.";
    if(ageQuestion >= 100) throw "I doubt anyone at age " + ageQuestion + " can actually use the internet...Unless you are John the Beloved.";

    console.log("Thank you for entering a realistic age.") //this runs if no errors
}
catch(error) { //only logs if an error was caught. will now log a throw
    console.log(error);
}


try{
    let chatBox = prompt("students.cs.byu.edu says\nNew chat session opened!");

    console.log("It didn't execute"); //this should only execute if the prompt didn't show up. considered a fall back.

    if(chatBox == "") throw "Hi, my name is Jaden. I'll be your TA today. How can I help?";
    if(isNaN(chatBox)) throw "I don't know what " + chatBox + " means. Directing you to another TA."
}
catch(error) {
    console.log(error);
}
finally{ //executes after everything else, no matter what.
    console.log("Jaden has left the chat.");
}


//testing when try block catches an error
try{
    let ageQuestion = prmpt("Enter your age: ");
}
catch(error) { //only logs if an error was caught
    console.log(error.name); 
    console.log(error.message);
}
