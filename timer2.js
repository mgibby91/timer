const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  console.log(key);

  if (key === 'b') {
    console.log('BEEP incoming...');
    process.stdout.write('\x07');
  }

  if (key < 10 && key > 0) {

    process.stdout.write(`Setting timer for ${key} seconds...`);

    setTimeout(() => {
      console.log('BEEP!');
      process.stdout.write('\x07');
    }, key * 1000);
  }

  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!');
    process.exit();
  }
});


