import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('JubilApp Api');
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
