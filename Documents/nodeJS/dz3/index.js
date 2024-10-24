const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  
  let counter = JSON.parse(fs.readFileSync('counter.json', 'utf8') || '{}');
  counter['/'] = counter['/'] ? counter['/'] + 1 : 1;

  fs.writeFileSync('counter.json', JSON.stringify(counter));

  res.send(`<p>Homepage</p>`);
});

app.get('/about', (req, res) => {
  let counter = JSON.parse(fs.readFileSync('counter.json', 'utf8') || '{}');
  counter['/about'] = counter['/about'] ? counter['/about'] + 1 : 1;
  fs.writeFileSync('counter.json', JSON.stringify(counter));
  res.send(`<p>About page</p>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});