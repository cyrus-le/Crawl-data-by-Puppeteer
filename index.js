const path = require('path'); //path này sẽ mò đến file .handlebars
const app = express();
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});
