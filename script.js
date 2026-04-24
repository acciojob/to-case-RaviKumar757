function toCase(str) {
  // Handle empty string
  if (str === "") return "-";

  return str.toLowerCase() + "-" + str.toUpperCase();
}
console.log(toCase('Mthatha'));    // "mthatha-MTHATHA"
console.log(toCase('HelloWorld')); // "helloworld-HELLOWORLD"
console.log(toCase('OpenAI'));     // "openai-OPENAI"
console.log(toCase(''));           // "-"