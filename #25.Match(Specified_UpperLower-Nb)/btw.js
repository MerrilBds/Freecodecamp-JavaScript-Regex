/*
Specify Upper and Lower Number of Matches

Recall that you use the plus sign + to look for one or 
more characters and the asterisk * to look for zero or more characters. 
These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). 
You put two numbers between the curly brackets - for the lower and upper number of patterns.
*/
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);