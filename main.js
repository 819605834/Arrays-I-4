// Do not modify this line directly
var ranks = ["domain", "kingdom", "category", "family", "genus"];

// Write your code below
// 1. domain
// 2. kingdom
// 3. phylum
// 4. class
// 5. order
// 6. family
// 7. genus
// 8. species
ranks.splice(2, 1, "phylum", "class", "order");
ranks.splice(7, 0, "species");

console.log(ranks);
