const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Suppress the unnecessary warning at the beginning
mongoose.set("strictQuery", false);
// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port : ' + port));