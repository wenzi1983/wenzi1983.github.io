var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/config');
var logic = require('../db/logic');

//创建连接池
var pool = mysql.createPool(dbConfig.mysql);

//设置跨域访问
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

router.post('/latestTask', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    connection.query(logic.latestTask, function (err, result) {
      if (result.length) {
        var jsonData = {
          status: true,
          message: '获取成功',
          data: result
        }
      } else {
        var jsonData = {
          status: false,
          message: '获取失败'
        }
      }
      res.json(jsonData)
      connection.release();
    })
  })
})

router.post('/addUser', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息 
    connection.query(userSQL.insert, [param.name, param.password], function (err, result) {
      if (result) {
        result = {
          code: 200,
          msg: '增加成功'
        };
      }

      // 以json形式，把操作结果返回给前台页面     
      // responseJSON(res, result);
      res.json(result)

      // 释放连接  
      connection.release();

    });
  });

  // if (req.query.name === undefined || req.query.name === '') {
  //   res.send({ status: false, message: '参数姓名不正确' })
  // }
  // conn.query(sql + ' WHERE name="' + req.query.name+'"', function (err, result) {
  //   if (err) {
  //     console.log('[SELECT ERROR] - ', err.message);
  //     res.send
  //     return;
  //   }
  //   //把搜索值输出
  //   res.send(result);
  // });
});

module.exports = router;
