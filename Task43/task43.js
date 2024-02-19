var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Dynamo", "Criss Angel"];
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        modifiedMagicians.push("The Great " + magician);
    }
    return modifiedMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var originalMagicians = __spreadArray([], magicians, true);
var greatMagicians = make_great(originalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
