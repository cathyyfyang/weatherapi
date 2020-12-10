// model.js
 
const userSchema = require('./schemas');
const mongoose = require('mongoose');
const User = mongoose.model('User', userSchema);
 
module.exports = User;

mongoose.connect('mongodb://localhost/website', {
    useNewUrlParser: true
}, function (param) {
    console.log('mongodb connected')
});



