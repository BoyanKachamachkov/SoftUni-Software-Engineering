try {
  // code that can throw an exception
  // some other code - not executed in case of error!
} catch (ex) {
  // this code is executed in case of exception
  // ex holds the info about the exception
} 


function sumRange(array, start, end) {

  // check arr
  if (!Array.isArray(array)) {
    // return NaN
    throw new Error('Must give array')
  }

  if (start < 0) {
    start = 0;
  }

  if (end >= array.length) {
    end = array.length - 1;
  }


  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += Number(array[i])
  }
  return sum
}

console.log(sumRange([1, 2, 3], 1, 2));

try {
  console.log(sumRange('asd', 1, 2));

} catch (err) {
  console.log(err.name);

}