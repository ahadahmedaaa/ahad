var animals = ["Lion", "Tiger", "Leopard"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
    if (animal === "Lion") {
        console.log("".concat(animal, " is a majestic pride-dwelling predator."));
    }
    else if (animal === "Tiger") {
        console.log("".concat(animal, " is a powerful solitary hunter with striped fur."));
    }
    else if (animal === "Leopard") {
        console.log("".concat(animal, " is an agile spotted cat thriving in diverse habitats."));
    }
}
console.log("These animals belong to the cat family and are apex predators in their respective ecosystems.");
