var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
////引入arttemplate模板
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////引入mongoose模块
var db = require('mongoose');

//// 链接数据库 mongodb 协议, localhost 主机ip, student_db 数据库名称
db.connect('mongodb://localhost/student_db');

var Card = db.model('card', {
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  address: { type: String, default: "" },
  phone: { type: String, default: "" },
  qq: { type: String, default: "" },
  email: { type: String, default: "" },
  description: { type: String, default: "" }
})

/////使用mongoose保存数据到数据库 新建一个collections集合 名字为card
////存数据
app.post('/card', (req, res) => {
  console.log(req.body);
})

/////取数据
app.get('/card', (req, res) => {
  console.log(req.query);
})

app.listen(3000, () => {
  console.log('服务器运行中...');
})
