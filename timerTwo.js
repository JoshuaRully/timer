const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const standOut = process.stdout;
const beep = () => process.stdout.write('beep');

stdin.on('data', key => {
  if (key === 'b') {
    beep();
  }
  if (key === '\u0003') {
    standOut.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});