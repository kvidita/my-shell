const fs = require('fs');

const pwd = function(PWD, args) {
  if(args === '') {
    presentWorkingDir = PWD;
    return [presentWorkingDir, presentWorkingDir];
  }
}

const ls = function(PWD, args) {
  const entries = (fs.readdirSync(PWD + '/' + args));
  const output = [PWD, entries];
  return output;
}

const cd = function(PWD, args) {
  const changedDir = PWD + '/' + args;
  const output = [changedDir, changedDir]
  return output;
}

const command = {pwd: pwd, ls: ls, cd: cd};

const commandsPropertries = function(script) {
  const commandProperties = {}
  const commands = script.split(' ');
  commandProperties.name = commands[0];
  commandProperties.args = commands.splice(1).join(" ");
  return commandProperties;
}

const executeInstruction  = function(instruction, args, PWD) {
  const executedCommands = command[instruction](PWD, args);
  return executedCommands;
}

const execute = function(instructions) {
  let PWD = process.env.PWD;
  const commandOutput = [];
  for(const instruction of instructions) {
    const command = commandsPropertries(instruction);
    output = executeInstruction(command.name, command.args, PWD);
    PWD = output[0];
    console.log(PWD, "hello");
    commandOutput.push(output[1]);
  }
  console.log(commandOutput);
}

execute(['ls direct']);
execute(['pwd']);
execute(['cd direct']);
execute(['pwd']);

exports.execute = execute;
