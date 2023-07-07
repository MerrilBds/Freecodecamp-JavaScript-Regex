/*
Check For Mixed Grouping of Characters

Sometimes we want to check for groups 
of characters using a Regular Expression and to achieve that we use parentheses ().
*/
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);