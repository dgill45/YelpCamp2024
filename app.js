const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => console.log('Database connected'))
    .catch(err => console.log('connection error', err));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: 'My Backyard', description: 'cheap camping!'});
    await camp.save();
    res.send(camp)
})

app.listen(3000, () =>{
    console.log('serving on port 3000')
})