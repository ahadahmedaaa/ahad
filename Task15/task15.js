var guests = ["Mudassir", "Saad", "Mohsin", "Shahzaib"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \"Would you like to join me on dinner?\""));
}
console.log("I am sorry to hear that ".concat(guests[2], " will not be able to join us for dinner."));
guests[2] = "Ali";
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \"Would you like to join me on dinner?\""));
}
