const menu = require('./menu');
const rules = require('./rules');
const cards = ['fire','water','plant'];

menu.start();
menu.menu();
let chose = menu.ask();

while(chose!=2){
    while(chose!=1 && chose!=2){
        console.log('chose the correct option ');
        chose = menu.ask(menu.menu());
    }
    if(chose==1){
        rules.rules(cards);
    }
    console.log('-----wanna play again ? --------');
    menu.menu();
    chose = menu.ask();
}

