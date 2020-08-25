const sentence = "this shit gonna be hard";
let timeDifference = 0;

for (const char of sentence) {
  
  setTimeout(() => {
    if (char !== sentence[sentence.length - 1]) {
      process.stdout.write(char);
    } else {
      process.stdout.write(char + "\n");
    }
  },timeDifference);

  timeDifference += 100;

}


  


  
