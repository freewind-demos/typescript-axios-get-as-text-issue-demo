import * as express from 'express';

const app = express();

app.get('/json', (req, res) => {
  res.json([1, 2, 3]);
});

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
