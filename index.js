// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

// message to gifters
gifters = ["Guadalupe", "Ollie", "Aki"];
message = "surprise";

function writeCards(gifters, message){
    let reply = [];
    for(let i = 0; i < gifters.length; i++){
        reply.push(`Thank you, ${gifters[i]}, for the wonderful ${message} gift!`);
    }
    return reply;
}

wrapGifts(gifts);
writeCards(gifters, message);


// countdown
let countdown;
function countDown(countdown){
    while(countdown >= 0){
        console.log(countdown--)
    }
    return countdown;
}


