function deepEqual(a, b) {
  if (a === b) return true  
  if (a === null || typeof a !== "object" || b === null || typeof b !== "object") {
    return false
  }
  let aKeys = Object.keys(a), bKeys = Object.keys(b);
  if (aKeys.length != bKeys.length) {
    return false
  }
  for (let key of aKeys) {
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}