import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', async (_req, res) => {
  res.send({
      message: `Server is running on port ${PORT}`,
  });
});

app.post("/test", async (req, res) => {

  let data = req.body;
  
  res.send(data)
  console.log("post");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


