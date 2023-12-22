exports.aiGetCard = function aiGetCard(cards){
    let card = cards[Math.floor(Math.random()*3)];
    console.log('IA plays '+ card);
    return card;
}