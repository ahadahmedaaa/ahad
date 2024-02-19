var Fruits = ["apple", "mango", "strawberry", "orange", "banana", "pomegranate", "grapes"];
var favoriteFruits = ["apple", "orange", "banana"];
Fruits.forEach(function (fruit) {
    if (Fruits.includes(fruit)) {
        console.log("I really like ".concat(fruit, "!"));
    }
    else {
        console.log("".concat(fruit, " isn't one of your favorites."));
    }
});
