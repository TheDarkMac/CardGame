const player = require('./player');
const artint = require('./ai');
exports.rules = function play(cards){
    let aiscore = 0;
    let pscore = 0;
    while((aiscore+pscore)<3){
        p = player.player(cards);
        ai = artint.aiGetCard(cards);
        if(p==ai){
            console.log('DRAW!! ');
        }
        if(p == 'fire' && ai == 'water'){
            console.log('water kill fire');
            aiscore++;
        }else if(p == 'fire' && ai == 'plant'){
            console.log('fire kill plant');
            pscore++;
        }
        if(p == 'water' && ai == 'plant'){
            console.log('plant kill water');
            aiscore++;
        }else if(p == 'water' && ai == 'fire'){
            console.log('water kill fire');
            pscore++;
        }
        if(p == 'plant' && ai == 'fire'){
            console.log('fire kill plant');
            aiscore ++
        }else if(p == 'plant' && ai == 'water'){
            console.log('plant kill water');
            pscore++;
        }
        console.log('player score : ' + pscore);
        console.log('AI score : '+ aiscore);
    }

    console.log('your:' + pscore+' AI: ' + aiscore);
    if(pscore>aiscore){
        console.log('You are the best!!!!');
    }else if(pscore<aiscore){
        console.log('The A.I. win!!!');
        
    }else{
        console.log('DRAW');

    }
}

