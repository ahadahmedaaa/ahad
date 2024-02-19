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
guests.push("Ali");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \"Would you like to join me on dinner?\""));
}
console.log("\"I can not invite more than two people on dinner.\"");
while (guests.length > 2) {
    var removedguests = guests.pop();
    console.log("\"Sorry , ".concat(removedguests, " i cant invite you to dinner.\" "));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("\" Dear ".concat(guest, " you are invited to dinner.\" "));
}
guests.length = 0;
console.log("\" Empty Lists : \"", guests);
