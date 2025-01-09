export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (let value of array) {
    value = appendString + value;
    result.push(value);
  }

  return result;
}
