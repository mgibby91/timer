
const input = process.argv.slice(2);

const timer1 = function(userInput) {

  if (!userInput) return;

  for (let num of userInput) {
    if (Number(num) > 0 && !isNaN(num)) {
      setTimeout(() => {
        console.log('BEEP!');
        process.stdout.write('\x07');
      }, Number(num) * 1000);
    }
  }
};

timer1(input);