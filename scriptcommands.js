const executeInstruction = function(instruction, pwd) {
  if(instruction === 'pwd') {
    console.log(instruction);
  }

  if(instruction === 'ls') {
    const ls = (fs.readdirSync(pwd + ""));
    console.log(ls);
  }

  if(/cd /.test(instruction)) {
    let childDirectory = ((instruction.split(" "))[1]);
    pwd = pwd + "/" + childDirectory;
    ls = fs.readdirSync(pwd + "");
    console.log(pwd);
  }

  if(/ls /.test(instruction)) {
    let childDirectory = ((instruction.split(" "))[1]);
    pwd = pwd + "/" + childDirectory;
    ls = fs.readdirSync(pwd + "");
    console.log(ls);
  }
}


