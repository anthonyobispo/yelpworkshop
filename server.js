require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/nts", (req, res) => {
    res.status(404).json({
        status:"success",
        restaurants:"michoacana",
    })
});
//http://localhost:5000/getRestaurants


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});