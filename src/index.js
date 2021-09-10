// routing
const express = require('express')
const axios = require("axios")
const cors = require("cors");
const { response } = require('express');
const app = express();
app.use(cors())

//imports

//firebase
var admin = require("firebase-admin");
var serviceAccount = require("/Users/khoatran/Downloads/firebase_key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

//fdc
const FDC_API_KEY = "DEMO_KEY";
const FDC_ROUTE = "https://api.nal.usda.gov/fdc/v1/foods";


//routes
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
        res.send(err);
    })
})

app.get("/search_barcode", async (req, res) => {
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

app.post("/add_user", async (req, res) => {
    console.log(req);
    try{
        const user =  {
            firstName: "Khoa", 
            lastName: "Tran", 
            email: "jonwick@gmail.com", 
            recipes: []
        }
        const newDoc = await db.collection("users").add(user);
        res.status(201).send(`Created a new user: ${newDoc.id}`);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Unable to create user");
    }
})
app.listen(3000, () => console.log("Listening on port 3000"));