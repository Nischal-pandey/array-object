// pattern for practice 

let rows = 5; // Number of rows

for (let i = rows; i >= 1; i--) { 
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*'; 
  }
  console.log(pattern); // Print the pattern
}