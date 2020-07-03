const reverse = (str) => {
  if (str.length === 0) return;
  return str.slice(-1) + reverse(str);
}
