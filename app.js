import apiRouter from "./api";
const express = require("express");
const app =express();

app.use('/api', apiRouter);
app.use(express.static('public'));

app.get('/', (reg, res) => {
    res.send("public/index");
});




app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Experss is listining");
});