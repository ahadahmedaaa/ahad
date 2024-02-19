function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log("Your sandwich contains:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log();
}
Sandwich("Turkey", "Swiss cheese", "Lettuce", "Tomato");
Sandwich("Ham", "Cheddar cheese", "Mustard");
Sandwich();
