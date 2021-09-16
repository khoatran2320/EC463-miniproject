import { forSlideUp } from "react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/HeaderStyleInterpolators";
import fs from "./config";

app.post("/add_recipe", async (req, res) => {
    console.log(req.body);
    try{
        const recipe =  {
            email: req.body.recipe, 
            recipes: []
        }
        const newDoc = await db.collection("recipes").add(recipe);
        res.status(201).send(`Created a new recipe: ${newDoc.id}`);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Unable to add recipe");
    }
})

async function add_recipe(email, recipe){
    try{
        const rec =  {
            email: email, 
            recipe: recipe
        }
        const newDoc = await fs.collection("recipes").add(rec);
    }
    catch (err) {
        console.log(err);
    }
}