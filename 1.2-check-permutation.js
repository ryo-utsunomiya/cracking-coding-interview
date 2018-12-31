/**
 * Check Permutation: Given two strings, write a method to decide
 * if one is a permutation of the other.
 */

function checkPermutation(a, b) {
  const aStr = String(a);
  const bStr = String(b);
  if (aStr.length !== bStr.length) return false;

  const aSorted = [...aStr].sort().join('');
  const bSorted = [...bStr].sort().join('');
  return aSorted === bSorted;
}

console.log(checkPermutation('hello', 'llohe')); // true
console.log(checkPermutation('hello', 'kitty')); // false