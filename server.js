require("dotenv").config()
const express = require("express");



const app = express();

app.get("/getRestaurants", (rq, res) => {
    console.log("get all restaurants");
});
//http://localhost:2002/getRestaurants


const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});