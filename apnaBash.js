const fs = require('fs');
const {execute} = require('./utilitiesBash.js');

const main = function() {
  const commandsFile = process.argv[2];

  if(!fs.existsSync(commandsFile)) {
    console.log("error: source file does not exist");
    process.exit(1);
  }
  const content = fs.readFileSync(commandsFile, 'utf-8').trim();
  const commands = content.split("\n");

  execute(commands);
}

main();
