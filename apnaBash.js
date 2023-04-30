const fs = require('fs');
const {execute} = require('./utilitiesBash.js');

const main = function() {
  const commandsFile = process.argv[2];
  const content = fs.readFileSync(commandsFile, 'utf-8').trim();
  const commands = content.split("\n");
  let pwd = process.env.PWD;

  if(!fs.existsSync(commandsFile)) {
    console.log("error: file does not exist");
    return 0;
  }

  execute(commands, pwd);

}

main();
