exports.player = function play(cards){
    const ask = require('./menu');
    let sendCard;
    console.log('--------------------');
    console.log(cards);
    console.log('chose your destiny');
    sendCard = ask.ask('');
    while(!cards.includes(sendCard)){
        console.log('--------------------');
        console.log('chose between this ');
        console.log(cards);
        sendCard = ask.ask('');
    }
    console.log('you play '+sendCard);
    while(!cards.includes(sendCard)){
        console.log(cards);
        console.log('chose your destiny');
        sendCard = ask.ask()
    }
    return sendCard;
}