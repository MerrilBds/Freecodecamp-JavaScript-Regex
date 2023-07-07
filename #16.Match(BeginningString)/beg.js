/*
In an earlier challenge, you used the caret character (^) inside a character 
set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
Outside of a character set, the caret is used to search for patterns at the beginning of strings.
*/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; //becareful /^.../ !== to /[^...]/
let result = calRegex.test(rickyAndCal);
