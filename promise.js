//using promises...
function sumNumbersPromise(n) {
    return new Promise((resolve, reject) => {
      if (n <= 0) {
        reject("Invalid input");
      } else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
          sum += i;
        }
        resolve(sum);
      }
    });
  }
  
  function calculateSumUsingPromise() {
    sumNumbersPromise(4)
      .then((result) => {
        console.log("Sum:", result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  calculateSumUsingPromise();

//async....
  async function calculateSumUsingAsyncAwait() {
    try {
      const result = await sumNumbersPromise(4);
      console.log("Sum:", result);
    } catch (error) {
      console.error(error);
    }
  }
  
  calculateSumUsingAsyncAwait();
  
  