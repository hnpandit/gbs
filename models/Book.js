var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  authors: 
  [{
    type: String,
    required: true
  }],
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }  
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;