function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript."; }
    console.log("The size of the shirt is ".concat(size, " and the message is ").concat(message));
}
make_shirt();
