import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Hello World!!",
  });
});

export { app };
