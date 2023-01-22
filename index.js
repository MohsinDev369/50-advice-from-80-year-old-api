const app = require("express")();
const advice = require("./advice.json");

app.get("/", (req, res) => {
  res.send("Welcome to the api, please so to /advice");
});


app.get("/advice", (req, res) => {
    const randomNo = Math.floor(Math.random() * advice.advice.length);
  res.json({ advice: advice.advice[randomNo] });
});

app.listen(3000, () => console.log(`http://localhost:3000`));
