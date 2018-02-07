var express = require('express');
var router = express.Router();
var URL = require('url');
var mysql = require('mysql');

//创建连接
var conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'test'
});
//执行创建连接 
conn.connect();

//设置跨域访问
router.post('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var sql = 'SELECT * FROM user'

router.post('/eee', function (req, res, next) {
  if (req.query.name === undefined || req.query.name === '') {
    res.send({ status: false, message: '参数姓名不正确' })
  }

  conn.query(sql + ' WHERE name="' + req.query.name+'"', function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      res.send
      return;
    }

    //把搜索值输出
    res.send(result);
  });

  // res.json({ title: 'e4' });
});

module.exports = router;
