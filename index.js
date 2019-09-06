const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Recipe.create({data})

// Recipe.findOne({
//   title: "Carrot Cake"
// }).then(data => {
//   console.log(data)
// });

Recipe.create({ title: "NewCurry", cuisine: "Indian" }).then(data => {
  console.log(data.title);
});

Recipe.insertMany(data).then(data => {
  console.log(data.title);
});

Recipe.updateOne(
  { name: "Rigatoni alla Genovese" },
  { name: "Rigatoni alla Genovese", duration: 100 }
).then(data => {
  console.log("Recipe successfully updated");
});

Recipe.deleteOne({title:"Carrot Cake"}).then(data=>{
  console.log("Recipe successfully deleted")
})
