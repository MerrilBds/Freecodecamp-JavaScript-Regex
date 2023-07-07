//To search or extract a pattern more than once, you can use the global search flag: g.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;//associate with i-Flag for sensitive case
let result = twinkleStar.match(starRegex); 