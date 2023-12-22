exports.start = function start(){
    console.log('-------------------------')
    console.log('   Element Cards Games   ');  
    console.log('-------------------------');
}

exports.menu = function menu(){
  console.log('---------------------------');
  console.log('|  Play            Exit   |');
  console.log('---------------------------');
  console.log('|   1               2     |');
  console.log('---------------------------');
}

exports.ask = function ask(question){
  const prompt = require('prompt-sync')();
  return prompt(question);
}
