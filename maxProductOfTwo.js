//Write a JavaScript function that finds and returns the maximum product of any two integers in an array of positive integers. If the array has fewer than two elements, return -1. The function should take an array of positive integers as its input.

function maxProductOfTwo(arr) {
  if (arr.length < 2) {
    return -1; // Not enough elements in the array
  }

  let maxProduct = arr[0] * arr[1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      maxProduct = Math.max(maxProduct, arr[i] * arr[j]);
    }
  }

  return maxProduct;
}

// Example usage:
const numbers = [10, 5, 8, 3, 1, 12];
const maxProduct = maxProductOfTwo(numbers);
console.log("Maximum Product of Two Integers:", maxProduct);
