let guestCount = 99;


let engagementPromise = new Promise(function (resolve, reject) {
  if (guestCount > 100) {
    // return value
    reject('Wedding too huge!');
  } else {
    // return value
    resolve('Let\'s married!');
  }
});

engagementPromise
  .then(function (resolve) {
    console.log('promise fulfilled with resolve');
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log('promise failed with reject');
    console.log(reject);
  });

// Always reject or resolve
// let alwaysReject = Promise.reject('some reason');
let alwaysResolve = Promise.resolve('agree');

// alwaysReject.catch();
// alwaysResolve.then();

// fulfills only when all promises have fulfilled
let allPromises = Promise.all([
  engagementPromise,
  alwaysResolve
]);

allPromises
  .then(function (response) {
    console.log('All resolved');
  })
  .catch(function (err) {
    console.log('at least one failed');
    console.log(err);
  })
  .finally(function () {
    console.log('at the end');
  });