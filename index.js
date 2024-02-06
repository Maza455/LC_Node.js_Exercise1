const fs = require('fs');

fs.writeFile('data.txt', 'First content = Zukisa', (err) => {
  if (err) throw err;
  console.log('First content in the file data.txt');
});

// Accrdingly no it won't over write the file
fs.writeFile('data.txt', 'Second content = Proctor\n\n', (err) => {
  if (err) throw err;
  console.log('Second content written to data.txt');
});

fs.appendFile('data.txt', 'Third content = Maza', (err) => {
  if (err) throw err;
  console.log('New content appended to data.txt');
});
