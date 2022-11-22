require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");
const morgan = require('morgan');
const app = express();

app.use(express.json());

//get all restaurants
app.use(cors());
app.get("/api/v1/restaurants", async (req, res,) => {
    const results = await db.query("select * from restaurants");
 console.log(results);
    res.status(201).json({
        status:"success",
        results: results.rows.length,
        data:{restaurant: results.rows,},
    });
});
//http://localhost:5000/getRestaurants

//get a restaurant method
app.get("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "guendis"
        }
    })
})


//create a restaurant
app.post("/api/v1/restaurants", (req,res)=> {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "guendis"
        }
    })
});

//update restaurant
app.put("/api/v1/restaurants/:id",(req,res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "guendis"
        }
    })
});

//delete restaurant
app.delete("/api/v1/restaurants/:id", (req,res)=> {
    res.status(204).json({
        status: "success",
    })
})



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});