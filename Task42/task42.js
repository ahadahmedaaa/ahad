var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Dynamo", "Criss Angel"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
magicians = make_great(magicians);
show_magicians(magicians);
