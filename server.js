require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const app = express();

//app.use(express.json());
//get all restaurants
app.use(cors());
app.get("/api/v1/restaurants", (req, res,) => {
 console.log("route handler ran");
    res.status(200).json({
        status:"success",
        data: {
            restaurants:["michoacana", "7eleven"],
        }
    })
});
//http://localhost:5000/getRestaurants

//get a restaurant method
app.get("/api/v1/restaurants/:restaurantid", (req,res) => {
    console.log(req.params);
})


//create a restaurant
app.post("api/v1/restaurants", (req,res)=> {
    console.log(req.body);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});