//Note: The String.prototype.trim() method would work here, 
//but you'll need to complete this challenge using regular expressions.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, ""); 