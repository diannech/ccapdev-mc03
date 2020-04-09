
var mongoose = require('mongoose');

/*
    TODO:   Complete the UserSchema which will contain the name and the
            number of contacts in the database.
*/

var UserSchema = new mongoose.Schema({
    // your code here
    name: { type: String, required: [true, "No name provided"] },
    number: { type: Number, required: [true, "No number provided"] }
});

module.exports = mongoose.model('User', UserSchema);
