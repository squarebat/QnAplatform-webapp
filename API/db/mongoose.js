const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/QnAPlatform', { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {
    console.log("Connected to MongoDB successfully B)");
}).catch((e) => {
    console.log("Error while connecting to db ;-;");
    console.log(e);
});

//to prvent deprecation warnings
/********** Learn *********/ 
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',true);

module.exports = {
    mongoose
};