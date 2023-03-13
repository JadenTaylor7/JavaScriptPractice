const someRegularExpression = /(lol)|(miami)|(heat)|(urmom)|(happy)|(huh)|(lard)/gi;
const aSentence = "something that makes urmom happy and lol would be visiting Disneyland in the heat of the day.";
const wheresAt = /at/gi;

console.log(aSentence.match(someRegularExpression));
console.log(aSentence.match(wheresAt));
console.log("saying something");


const someRegEx = /the/gi;
const mainlyE = /el?t?/gi;
const shortStory = "'The bird just yeeted itself on the ground.'";

console.log("Looking for",shortStory);
console.log(shortStory.match(mainlyE));
console.log(shortStory.match(someRegEx));




