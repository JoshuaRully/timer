const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const standOut = process.stdout;
const beep = () => process.stdout.write('beep');

stdin.on('data', key => {
  if (key === 'b') {
    beep();
  }
});