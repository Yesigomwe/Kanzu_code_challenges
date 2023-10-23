function customSort(arr) {
    const result = {
      evens: [],
      odds: [],
      chars: [],
    };
  
    for (const item of arr) {
      if (typeof item === 'number') {
        if (Number.isInteger(item)) {
          if (item % 2 === 0) {
            result.evens.push(item);
          } else {
            result.odds.push(item);
          }
        } else {
          // Handle floats
          if (Math.floor(item) % 2 === 0) {
            result.evens.push(item);
          } else {
            result.odds.push(item);
          }
        }
      } else if (typeof item === 'string' && item.length === 1) {
        result.chars.push(item);
      }
    }
  
    // Sort the arrays manually
    result.evens = result.evens.sort((a, b) => a - b);
    result.odds = result.odds.sort((a, b) => a - b);
    result.chars = result.chars.sort();
  
    return result;
  }
  //Tests
  const inputArray = [3, 1.5, 2, 'z', 4, 5, 7.2, 6, 'a', 8, 'b', 9];
  const result = customSort(inputArray);
  console.log(result);
  