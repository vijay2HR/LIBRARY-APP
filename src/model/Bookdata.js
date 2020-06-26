const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');
const Schema1 = mongoose.Schema;

const BookSchema = new Schema1({
    title: String,
    author: String,
    genre:String,
    image:String

});
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;