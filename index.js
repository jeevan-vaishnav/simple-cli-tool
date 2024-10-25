const { Command } = require('commander');
const program = new Command();

program
.version('1.0.0')
.description('A simple CLI tool for basic arithmetic operations')
.option('-a, --add <numbers>','Add numbers', (value)=>value.split(',').map(Number))
.option('-s, --subtract <numbers>','Subtract numbers', (value)=>value.split(',').map(Number))
.option('-m, --multiply <numbers>','Multiply numbers', (value)=>value.split(',').map(Number))
.option('-d, --divide <numbers>','Divide numbers', (value)=>value.split(',').map(Number))




program.parse(process.argv);

const options = program.opts();
console.log(options)

if(options.add){
    const result = options.add.reduce((acc,num) => acc + num,0);
    console.log(`Result of addition: ${result}`)
}

if(options.subtract){
    console.log('Subtract method....')
    const result = options.subtract.reduce((acc,num)=> acc - num);
    console.log(`Result of subtract ${result}`)
}

if(options.multiply){
    const result = options.multiply.reduce((acc,num)=> acc * num,1);
    console.log(`Result of multiply ${result}`)
}

if(options.divide){
    const result = options.divide.reduce((acc,num) => acc / num);
    console.log(`Result of Division ${result}`)
}