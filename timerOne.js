const timers = process.argv.slice(2);

timers.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('beep\n');
  }, time * 1000);
});