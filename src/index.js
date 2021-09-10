const express = require('express')
const axios = require("axios")
const cors = require("cors");
const { response } = require('express');
const app = express();
app.use(cors())

const FDC_API_KEY = "DEMO_KEY";
const FDC_ROUTE = "https://api.nal.usda.gov/fdc/v1/foods";

app.get("/search_keyword", (req, res) => {
    axios.get(FDC_ROUTE + "/search", {
        params: {
            api_key: FDC_API_KEY,
            //keyword to search
            query: req.query.keyword
        }
    } )
    .then((response) => {
        //send results back to frontend
        res.send(response.data)
    })
    .catch((err) => {
        // error handling
        console.log(err);
    })
})

app.get("/search_barcode", (req, res) => {
    if(req.query.keyword){
        axios.get("https://api.nal.usda.gov/fdc/v1/food/" + req.query.keyword, {
            params: {
                api_key: FDC_API_KEY
            }
        } )
        .then((response) => {
            //send results back to frontend
            res.send(response.data);
        })
        .catch((err) => {
            // error handling
            res.send(err);
        })
    }
    else{
        res.send("Invalid barcode");
    }
})

app.listen(3000, () => console.log("Listening on port 3000"));