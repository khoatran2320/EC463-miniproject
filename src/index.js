const express = require('express')
const axios = require("axios")
const cors = require("cors")
const app = express();
app.use(cors())

const FDC_API_KEY = "DEMO_KEY";
const FDC_ROUTE = "https://api.nal.usda.gov/fdc/v1/foods/";

app.get("/search_keyword", (req, res) => {
    console.log(req.query.keyword);
    axios.get(FDC_ROUTE + "search", {
        params: {
            api_key: FDC_API_KEY,
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

app.listen(3000, () => console.log("Listening on port 3000"));