const app = require("express")();
const advices = require("./advices.json");

app.get("/", (req, res) => {
  res.send("Welcome to the api, please so to /advice");
});


app.get("/advice", (req, res) => {
    const randomNo = Math.floor(Math.random() * advices.advices.length);
  res.json({ advice: advices.advices[randomNo] });
});

app.listen(3000, () => console.log(`http://localhost:3000`));
