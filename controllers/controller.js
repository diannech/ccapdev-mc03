const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `home.hbs` with all contacts
            current stored in the database.
    */
    getIndex: function(req, res) {
        // your code here
        res.render('home'); // This is to load the page initially
        const app = express();
        app.get('/', function(req, res) {
            res.render('home.hbs', { title: 'Home' });
        });
    },


    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckNumber`. This function checks if a
            specific number is stored in the database. If the number is
            stored in the database, it returns an object containing the
            number, otherwise, it returns an empty string.
    */
    getCheckNumber: function(req, res) {
        // your code here
            db.exists({ number: "#number" }, function(err, result) {
                if (err) {
                  res.send(err);
                } else {
                  res.send(result);
                }
            });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the contact sent
            by the client to the database, then appends the new contact to the
            list of contacts in `home.hbs`.
    */
    getAdd: function(req, res) {
        // your code here
            var student = new contactModel({
                name: req.body.name,
                number: req.body.number,
            });
            
            contact.save(function(err, contact) {
                var result;
                
                if (err) {
                    console.log(err.errors);
                    
                    result = { success: false, message: "Contact was not created!" }
                    res.send(result);
                } else {
                    console.log("Successfully added contact");
                    console.log(contact); 
                
                    result = { success: true, message: "Contact created!" }
                    
                    res.send(result);
                }
            });
    },
    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the contact
            from the database, then removes the contact to the list of
            contacts in `home.hbs`.
    */
    getDelete: function (req, res) {
        contactModel.deleteOne({ number: '#number' }, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
          });
    }

}

module.exports = controller;
