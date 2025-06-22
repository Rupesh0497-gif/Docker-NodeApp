import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Correct route with proper response
app.get('/hello', (req, res) => {
  console.log("Hey");
  res.send("Hey bro, your first Docker app!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
