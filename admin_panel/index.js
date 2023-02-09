const express=require('express'); 
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors=require('cors');
const picController = require('./controller/picController')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const db = require('./config/mongoose');

app.post('/api/pic', picController.addPics)
app.get('/api/pic', picController.getPics)

//server running on port 8000
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});

module.exports = app; 




