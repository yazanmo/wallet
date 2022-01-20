const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true, 

    useUnifiedTopology: true 
};

// connecting mongoose
mongoose.connect("mongodb://localhost:27017/tracker", options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);