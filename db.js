const mongoose = require('mongoose');
const connectToMongo = () =>{
    mongoose.connect(process.env.MONGOOSE_URI,()=>{
        console.log("Connected To MongoDB Successfully")
    }).catch(err=>{console.log(err)})
}
module.exports = connectToMongo;