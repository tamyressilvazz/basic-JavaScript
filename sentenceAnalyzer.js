// returns how many vowels there are in the sentence
function getVowelCount(sentence) {
    const vowels = "aeiou";
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log(`Vowel Count: ${vowelCount}`);
  
  // returns how many consonants there are in the sentence
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log(`Consonant Count: ${consonantCount}`);
  
  // returns how many punctuations there are in the sentence
  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
  console.log(`Punctuation Count: ${punctuationCount}`);
  
  function getWordCount(sentence) {
    if (sentence.trim() === '') {
      return 0;
    }
    
    const words = sentence.trim().split(/\s+/);
    return words.length;
  }
  
  let wordCount = getWordCount("I love freeCodeCamp");
  console.log(`Word Count: ${wordCount}`);