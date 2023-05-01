const fs = require('fs');

const isValidPath = function(path) {
  return fs.existsSync(path);
}

const pwd = function(PWD, args) {
  if(args.length >= 1) {
    return {pwd: PWD, output: "pwd: too many arguments"}
  }
  return {pwd: PWD, output: PWD};
};

const ls = function(PWD, args) {
  if(args.length >= 1) {
    const path = PWD + '/' + args[0];
    if(isValidPath(path)) {
      const entries = (fs.readdirSync(PWD + '/' + args[0]));
      return {pwd: PWD, output: entries};
    }
    return {pwd: PWD, output: "ls: no such file or directory"};
  }
  return {pwd: PWD, output: fs.readdirSync(PWD)};
};

const cd = function(PWD, args) {
  if(args.length > 1) {
    return {pwd: PWD, output: "cd: too many arguments"};
  }
  const path = PWD + '/' + args[0];
  if(isValidPath(path)) {
    const changedDir = PWD + '/' + args[0];
    return {pwd: changedDir};
  }
  return {pwd: PWD, output: "cd: no such file or directory"};
};

const command = {
  pwd: pwd, 
  ls: ls, 
  cd: cd
};

const commandsProperties = function(commands) {
  const [name, ...args] = commands.split(' ');
  const commandProperties = {name, args};

  return commandProperties;
}

const executeInstruction  = function(instruction, args, PWD) {
  return executedCommands = command[instruction](PWD, args);
}

const filterOutput = function(outputs) {
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
    const command = commandsProperties(instruction);
    const processOutput = executeInstruction(command.name, command.args, PWD);
    PWD = processOutput.pwd;
    commandOutput.push(processOutput.output);
  }  

  console.log(filterOutput(commandOutput));
}

exports.execute = execute;
