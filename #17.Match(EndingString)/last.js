//You can search the end of strings using the dollar sign character $ at the end of the regex.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);