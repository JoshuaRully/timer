const timers = process.argv.slice(2).filter(time => !isNaN(time)).filter(time => time >= 0);


timers.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('beep\n'); //had to use string since system sound would not work
  }, time * 1000);
});