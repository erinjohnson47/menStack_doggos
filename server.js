const express = require('express')

const app = express();
const dogRoutes = require('./routes/dogRoutes');

app.use(express.json()); 
app.use(express.urlencoded({extended: false})); //replaces bodyParser middleware
app.use('/dogs', dogRoutes);

require('./db/db');

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});

