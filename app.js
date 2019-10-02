/*Begin Standart function*/
function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 10) + 1);
}
function printSome() {
  printString("A");
  printString("B");
  printString("C");
  printString("D");
}
// printSome();

/*Begin Callback function*/
function printStringWithCallback(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
function printSomeWithCallback() {
  printStringWithCallback("A - Callback", () => {
    printStringWithCallback("B - Callback", () => {
      printStringWithCallback("C - Callback", () => {});
    });
  });
}
// printSomeWithCallback();

/*Begin Promise function*/
function printStringWithPromise(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      if (string != "Z") {
        resolve();
      } else {
        reject();
      }
    }, Math.floor(Math.random() * 100) + 1);
  });
}
function printSomeWithPromise() {
  printStringWithPromise("A - promise")
    .then(() => printStringWithPromise("B - promise"))
    .then(() => printStringWithPromise("C - promise"))
    .then(() => console.log("Done - promise"))
    .catch(() => alert("error cuk", error));
}
// printSomeWithPromise();

/*Begin async/await*/
async function printSomeWithAsyncAwait() {
  await printStringWithPromise("A - async/await");
  await printStringWithPromise("B - async/await");
}
// printSomeWithAsyncAwait();

//Counter
//standart
function increment(current, next, callback) {
  setTimeout(() => {
    callback(current + next);
  }, Math.floor(Math.random * 100) + 1);
}
function incrementSome() {
  increment(1, 1, result => {
    increment(result, 2, result => {
      increment(result, 3, result => {
        console.log("Result", result);
      });
    });
  });
}
incrementSome();

//promise
function incrementWithPromise(current, next) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(current + next);
    }, Math.floor(Math.random * 100) + 1);
  });
}

function incrementSomeWithPromise() {
  incrementWithPromise(1, 1)
    .then(result => incrementWithPromise(result, 2))
    .then(result => incrementWithPromise(result, 3))
    .then(result => console.log("Result-promise", result));
}
incrementSomeWithPromise();

//async/await
async function incrementSomeWithAsync() {
  let result = await incrementWithPromise(1, 1);
  result = await incrementWithPromise(result, 2);
  result = await incrementWithPromise(result, 3);
  console.log("Result-Async", result);
}
incrementSomeWithAsync();
