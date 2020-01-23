const express = require('express');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-rcc4k.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

app.listen(3333);