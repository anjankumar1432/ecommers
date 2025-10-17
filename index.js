const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const routes = require('./routes/app'); 



app.use('/api', routes); 

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
