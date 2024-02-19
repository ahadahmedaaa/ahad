var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["India", "Pakistan", "China", "Iran", "Iraq"];
console.log("Original locations:");
locations.forEach(function (location) { return console.log(location); });
var sortedlocations = __spreadArray([], locations, true).sort();
console.log("\nSorted locations:");
sortedlocations.forEach(function (sortedlocation) { return console.log(sortedlocation); });
console.log("\nOriginal locations UNCHANGED :");
locations.forEach(function (location) { return console.log(location); });
var reverselocations = __spreadArray([], locations, true).reverse();
console.log("\nReverse Location : ");
reverselocations.forEach(function (reverselocation) { return console.log(reverselocation); });
console.log("\nOriginal locations UNCHANGED :");
locations.forEach(function (location) { return console.log(location); });
