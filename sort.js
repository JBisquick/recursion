function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } 
  let left = mergeSort(array.slice(0, array.length / 2));
  let right = mergeSort(array.slice(array.length / 2));
  let sortArray = [];
  while (left.length > 0 || right.length > 0) {
    // undefined for when an array becomes empty
    if (right[0] <= left[0] || left[0] === undefined) {
      let sortRight = right.shift();
      sortArray.push(sortRight);
    } else if (left[0] <= right[0] || right[0] === undefined) {
      let sortLeft = left.shift();
      sortArray.push(sortLeft);
    }
  }
  return sortArray;
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));