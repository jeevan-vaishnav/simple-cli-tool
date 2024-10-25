const { Command } = require('commander');
const program = new Command();

program
.version('1.0.0')
.description('A simple CLI tool for basic arithmetic operations')
.option('-a, --add <numbers>','Add numbers', (value)=>value.split(',').map(Number))

program.parse(process.argv);

const options = program.opts();
console.log(options)

if(options.add){
    const result = options.add.reduce((acc,num) => acc + num,0);
    console.log(`Result of subtraction: ${result}`)
}