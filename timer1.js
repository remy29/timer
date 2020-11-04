const timer = function(inputs) {
  inputs.forEach((input) => {
    if (input > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, input * 1000);
    }
  });
};

timer(process.argv.slice(2));


