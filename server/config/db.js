const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
.then((res) => {
    console.log("Connected to MongoDB");;
})
.catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
});