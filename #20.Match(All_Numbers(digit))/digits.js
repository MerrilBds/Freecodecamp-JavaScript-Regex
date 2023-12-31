/*
The shortcut to look for digit characters is \d, with a lowercase d. 
This is equal to the character class [0-9]
*/

//Use the shorthand character class \d to count how many digits are in movie titles. 
//Written out numbers("six" instead of 6) do not count.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;