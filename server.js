// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
const app = express();

const passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var db
var currentUser = "";
var currentReport = "";
var currentReportName = "";
var reports = {};
var vitalSigns = {};
var reportAuthor = "";

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));
app.set("port", process.env.PORT || 5000);

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compression({filter: shouldCompress}))

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
   
    // fallback to standard filter function
    return compression.filter(req, res)
  }

app.use(helmet());

passport.use(
    new LocalStrategy(function(username, password, done) {
        console.log("username: " + username + ", password: " + password);
        db.collection('User').find({ username: username }).toArray(function(err, user) {
            console.log("User: " + JSON.stringify(user));
            if (!user) {
            console.log("No User");
            return done(null, false);
            }
            if(password === user[0].password) {
                console.log("Success Local Strategy");
                currentUser = user[0]._id;
                return done(null, user);
            } else {
                console.log("Password Fail");
                return done(null, false);
            }
        })
    })
);

passport.serializeUser(function(user, done) {
    done(null, user[0]._id);
    console.log("Success Serialize");
});

/* needs to be integrated to mongodb */
passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(user => {
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
        })
        .catch(err => done(err, false));
    console.log("Success deserialize");
});

app.use(passport.initialize());
app.use(passport.session());

// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//API Get Connection
//Defining a reusable find function
function mongoFind( mongo, find, req, res, innerFunction ) {
    if(find) {
        console.log("Searching " + mongo + " for " + JSON.stringify(find));
        db.collection(mongo).find(find).toArray(function(err, array) {  
            console.log("Found" + JSON.stringify(array));
            res.send( { response: array } );
        });
    }
    else {
        console.log("Getting all of " + mongo);
        db.collection(mongo).find({}).toArray(function(err, array) {  
            console.log("Found" + JSON.stringify(array));
            res.send( { response: array } );
        });
    }
}

//Defining all get functions using ^

//Example
/*
app.get("/api/user" , function (req, res) {
    mongoFind('User', {_id: currentUser}, req, res );
});
*/

//API Post Connection

//Examples
/*
app.post("/api/newuser", function (req, res) {
    console.log("Posting /api/newuser")
    db.collection('User').save({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        department: req.body.department,
        username: req.body.username,
        password: req.body.password
    }).then(function(user) {
        console.log('Successful user Creation');
    }).catch(function(err) {
        console.log(err, req.body)
    });
    res.redirect(303, '/success');
});

app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", {
      successRedirect: "/success",
      failureRedirect: "/login"
    })(req, res, next);
    console.log("Login Processed");
});
*/

//Connecting to database and port
MongoClient.connect('mongodb://user2:L36e21o707@ds139920.mlab.com:39920/firstrecorder1', { useNewUrlParser: true }, (err, client) => {
    if (err) { return console.log(err) }
    db = client.db('firstrecorder1');
    app.listen(app.get("port"), () => {
        console.log(
            "Express started on http://localhost:" +
            app.get("port") +
            "; press Ctrl-C to terminate."
        );
    })
});

module.exports = app;
