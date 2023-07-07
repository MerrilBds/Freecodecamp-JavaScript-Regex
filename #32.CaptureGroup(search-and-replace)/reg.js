/*

Searching is useful. 
However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string.
 The inputs for .replace() is first the regex pattern you want to search for. 
 The second parameter is the string to replace the match or a function to do something.

*/
let str = "one two three";
let fixRegex = /^(one)\s(two)\s(three)$/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
