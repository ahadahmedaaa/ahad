var guests = ["Mudassir", "Saad", "Mohsin"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \"Would you like to join me on dinner?\""));
}
console.log("I am sorry to hear that ".concat(guests[2], " will not be able to join us for dinner."));
guests[2] = "Asghar";
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \"Would you like to join me on dinner?\""));
}
console.log("\"We Have found a bigger dinner table.\"");
guests.unshift("Ahmed");
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Faiza");
guests.push("Aslam");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \"Would you like to join me on dinner?\""));
}
