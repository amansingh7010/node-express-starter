import { app } from "./app";

const PORT = process.env.PORT || 3000;
const start = () => {
  console.log("Starting up...");

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

start();
