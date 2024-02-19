let guests: string [] = ["Mudassir", "Saad", "Mohsin"]

for( let i = 0 ; i<guests.length ; i++) 
{
    console.log( `Dear ${guests[i]}, "Would you like to join me on dinner?"`);
}
console.log(`I am sorry to hear that ${guests[2]} will not be able to join us for dinner.`);

guests[2]="Asghar";

for(let i = 0 ; i<guests.length; i++)
{
    console.log(`Dear ${guests[i]}, "Would you like to join me on dinner?"`);
}
console.log(`"We Have found a bigger dinner table."`);

guests.unshift("Ahmed");

let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Faiza");


guests.push("Aslam");

for( let i = 0 ; i<guests.length ; i++) 
{
    console.log( `Dear ${guests[i]}, "Would you like to join me on dinner?"`);
}

