var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shivamecom',
    { useNewUrlParser: true ,useUnifiedTopology: true ,useFindAndModify: false});

