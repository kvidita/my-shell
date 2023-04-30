const fs = require('fs');

const ls = function(pwd, arg = '') {
  console.log(fs.readdirSync(pwd + '/' + arg));
}

const pwd = function(path = '') {
  PWD = process.env.PWD + '/' + path;
  console.log(PWD);
  return PWD;
}

const cd = function(pwd, arg) {
  console.log(pwd + '/' + arg);
}

const command = {pwd: pwd, ls: ls, cd: cd};

const commandsPrpertries = function(script) {
  const commandProperties = {}
  const commands = script.split(' ');
  commandProperties.name = commands[0];
  commandProperties.args = commands.splice(1);
  return commandProperties;
}

const executeInstruction  = function(instruction, args) {
  command[instruction](args);
}

const execute = function(instructions, pwd) {
  for(const instruction of instructions) {
    const command = commandsPrpertries(instruction);
    executeInstruction(command.name, command.args);
  }
}

execute(['pwd'], pwd());
execute(['ls direct'], pwd);
execute(['cd direct'], pwd);
execute(['pwd'], pwd());

exports.execute = execute;
