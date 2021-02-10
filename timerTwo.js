const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const stdOut = process.stdout;
const beep = () => process.stdout.write('beep');

stdin.on('data', key => {
  if (key === 'b') {
    beep();
  }
  if (key === '\u0003') {
    stdOut.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key >= 1 && key <= 9) {
    stdOut.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      beep();
    }, key * 1000);
  }
});