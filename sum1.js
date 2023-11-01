//Find the sum of first 4 natural numbers using callback functions
function sumNumCallback(n, callback) {
    if (n <= 0) {
      callback("Invalid input");
    } else {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      callback(null, sum);
    }
  }

  function calculateSumUsingCallback() {
    sumNumCallback(4, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Sum:", result);
      }
    });
  }
  
  calculateSumUsingCallback();