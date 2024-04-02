var exports =module.exports ={};

exports.sayHelloworld =function(){
    console.log("HELLO WORLD");

};

const chalk =require('chalk');
let x ='hello world';

console.log(x)
console.log(chalk.yellow.bgBue.italic(x));

const figlet =require('figlet');
console.log(figlet.textSync('yeah', {
    font:'ghost',
    horizontallayout:'default',
    verticallayout:'default',
    
}));