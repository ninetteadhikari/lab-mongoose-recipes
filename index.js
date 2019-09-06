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

Recipe.create({ title: "NewCurry", cuisine: "Indian" }).then(data => {
  console.log(data.title);
});

Recipe.insertMany(data).then(data => {
  data.forEach(value => {
    console.log(value.title)
     })
    
});

Recipe.updateOne(
  { name: "Rigatoni alla Genovese", duration: 220 },
  { name: "Rigatoni alla Genovese", duration: 100 }
).then(data => {
  console.log("Recipe successfully updated");
});

Recipe.deleteOne({ title: "Carrot Cake" }).then(data => {
  console.log("Recipe successfully deleted");
  mongoose.connection.close();
});
