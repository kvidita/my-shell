const fs = require('fs');

const pwd = function(path = '', PWD) {
  return (PWD + '/' + path);
}

const ls = function(arg = '', PWD) {
  return (fs.readdirSync(PWD + '/' + arg));
}

const cd = function(arg, PWD) {
  PWD = pwd(arg, PWD);
  return (PWD + '/' + arg);
}

const command = {pwd: pwd, ls: ls, cd: cd};

const commandsPrpertries = function(script) {
  const commandProperties = {}
  const commands = script.split(' ');
  commandProperties.name = commands[0];
  commandProperties.args = commands.splice(1).join(" ");
  return commandProperties;
}

const executeInstruction  = function(instruction, args, PWD) {
  const executedCommands = [];
  executedCommands.push(command[instruction](args, PWD));
  console.log(executedCommands);
}

const execute = function(instructions) {
  let PWD = process.env.PWD;
  for(const instruction of instructions) {
    const command = commandsPrpertries(instruction);
    executeInstruction(command.name, command.args, PWD);
  }
}

execute(['pwd']);
execute(['ls direct'], pwd);
execute(['cd direct'], pwd);
execute(['pwd']);

exports.execute = execute;
