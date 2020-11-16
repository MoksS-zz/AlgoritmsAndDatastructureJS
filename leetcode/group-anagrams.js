const groupAnagrams = (strs) => {
  const list = new Map();

  for (str of strs) {
    const curstr = str.split('').sort().join('');

    if (list.has(curstr)) {
        list.get(curstr).push(str);
    } else {
        list.set(curstr, [str]);
    }
  }
 return Array.from(list.values());
};