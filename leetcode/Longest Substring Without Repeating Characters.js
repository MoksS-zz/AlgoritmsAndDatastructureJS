// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let count = 1;
  let max_count = 1;
  let j_start = 0;

  if (!s[0])
    return 0;
  else if (!s[1])
    return max_count;

  for (let i = 1; s[i]; i++) {
    for (let j = j_start; j < i; j++) {
      if (s[i] !== s[j])
        count++;
      else
        j_start = j + 1;
    }
    if (max_count < count)
      max_count = count;
    count = 1;
  }
  return max_count;
};