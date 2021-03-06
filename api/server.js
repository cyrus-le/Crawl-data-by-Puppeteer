const path = require('path'); //path này sẽ mò đến file .handlebars
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//HTTP logger
// app.use(morgan('combined'));

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public'))); //PHẢI ĐỂ THƯ MỤC PUBLIC. VÌ public là phía client side. Những gì nằm trong public là phải được hiện thị ra nên nếu để 'public/img' thì chỉ show ra ảnh nhưng không show ra những folder khác như css (vậy thì trang html sẽ không có được css lên :'((()   ))
app
//  __dirname: E:\Semester\OJT - On the Job Training\blog\src


//Template engine
//handle bars ra đời để biến phần code business(JAVA, C#) có nhứng html thành phần html thông thường để hiển thị cho người dùng
app.engine('hbs',handlebars({
    extname: '.hbs' //extension file. Thay vì gõ cái đuôi .handlebars thì mình sẽ đổi thành .hbs
}));
app.use(express.urlencoded({ //middleware của nodejs
    extended: true
}));
app.use(express.json()); //middleware của nodejs


app.set('view engine','hbs');
app.set('views',path.join(__dirname, 'resources\\views'));
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req,res) => {
    res.render("news");   
    console.log("PAGE NEWS");
    console.log(req.query);
    console.log(req.body);
});
app.get('/search',(req,res) => {
    res.render("search");
    console.log(req.query);
})
app.post("/search",(req,res) => {
    res.send();
    console.log(req.body);
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});