function generateArray(start, end) {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }
  
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7));