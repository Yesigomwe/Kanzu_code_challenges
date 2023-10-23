function CheckPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase for uniformity
    let expectedString = str.replace(/[^a-zA-Z0-9]/, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    let reversedString = expectedString.split('').reverse()
    return expectedString === reversedString.join('');
  }
  
  function firstPalindrome(words) {
    for (const word of words) {
      if (CheckPalindrome(word)) {
        return word;
      }
    }
    
    return '';
  }
  
 //Tests
  let wordsArray = [ "world","yawn","owo"];
  const result = firstPalindrome(wordsArray);
  console.log(result); 
  