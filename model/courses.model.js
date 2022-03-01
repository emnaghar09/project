const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
{   title: { type: String,required: true},
    description: { type: String,required: true },
    day: {  
      type: String,
      // enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    duration: { type: Number, min: 0 }, 
    intencity: { type: String},
    image: { type: String}
    //this part needs to be further unederstood
    // dateAdded: { type: Date, default: Date.now },
    // lastUpdated: { type: Date, default: Date.now }
}
);

module.exports = mongoose.model('Training', courseSchema)