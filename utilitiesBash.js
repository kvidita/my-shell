const fs = require('fs');

const pwd = function(PWD, args) {
  if(args === '') {
    const presentWorkingDir = PWD;
    return {pwd: presentWorkingDir, output: presentWorkingDir};
  }
};

const ls = function(PWD, args) {
  const entries = (fs.readdirSync(PWD + '/' + args));
  return {pwd: PWD, output: entries};
};

const cd = function(PWD, args) {
  const changedDir = PWD + '/' + args;
  return {pwd: changedDir};
};

const command = {
  pwd: pwd, 
  ls: ls, 
  cd: cd
};

const commandsPropertries = function(script) {
  const commands = script.split(' ');
  const commandProperties = {
    name: commands[0], 
    args: commands.slice(1).join(' ')
  };

  return commandProperties;
}

const executeInstruction  = function(instruction, args, PWD) {
  return executedCommands = command[instruction](PWD, args);
}

const displayOutput = function(outputs) {
  const output = [];

  for(let commandOutput of outputs) {
    commandOutput === undefined ? output : output.push(commandOutput);
  }
  return output;
}

const execute = function(instructions) {
  let PWD = process.env.PWD;
  const commandOutput = [];

  for(const instruction of instructions) {
    const command = commandsPropertries(instruction);
    const processOutput = executeInstruction(command.name, command.args, PWD);
    PWD = processOutput.pwd;
    commandOutput.push(processOutput.output);
  }  

  console.log(displayOutput(commandOutput));
}

exports.execute = execute;
