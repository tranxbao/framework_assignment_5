//define and create express app
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
//define port
const port = 3001;

//define routes
app.get('/', (req, res) => {
    //return 200 status and json response
    res.status(200).json({ message: 'Node server is responding-Weekly assignment 5' });
});

//start server
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
}   
);