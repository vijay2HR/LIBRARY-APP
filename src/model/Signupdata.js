const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');
const Schema2 = mongoose.Schema;

const SignupSchema = new Schema2({
    username: String,
    email: String,
   
    address:String,
    phno:String,
    passid:String,
    dob:String,
    // gender:Boolean,
    // gender:Boolean,
    // gender:Boolean,
    desc:String

});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;
