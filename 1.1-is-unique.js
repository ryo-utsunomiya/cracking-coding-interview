/**
 * Is Unique: Implement an algorithm to determine if a string has
 * all unique characters. What if you cannot use additional data
 * structures?
 */

function isUnique(value) {
  const chars = [...String(value)];
  const map = {};

  for (let i = 0, len = chars.length; i < len; i += 1) {
    const char = chars[i];
    if (map[char]) {
      return false;
    }
    map[char] = true;
  }

  return true;
}

console.log(isUnique('a')); // true
console.log(isUnique('aa')); // false
console.log(isUnique('aba')); // false
