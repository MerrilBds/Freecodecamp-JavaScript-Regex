/*
Match Single Character with Multiple Possibilities

You learned how to match literal patterns (/literal/) and 
wildcard character (/./). Those are the extremes of regular expressions, 
where one finds exact matches and the other matches everything.
 There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes.
 Character classes allow you to define a group of characters you wish to match 
 by placing them inside square ([ and ]) brackets.
 */
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); 