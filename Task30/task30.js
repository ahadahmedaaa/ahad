var usernames = ["username1", "username2", "admin", "username3", "username4", "username5"];
usernames.forEach(function (username) {
    if (username.toLocaleLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, " , thank you for logging in again."));
    }
});
