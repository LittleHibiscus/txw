
//1:引入模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"root",
  port:3306,
  database:"txw",
  connectionLimit:15
})
//3:创建express对象
var server = express();

//4:指定静态资源(图片应该放在服务器上)
server.use(express.static("public"));

//5:处理跨域请求
const cors = require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6:添加session功能
const session = require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));
//9:绑定监听端口
server.listen(3000);

//10：接口部分

//1：接收注册用户请求
server.get("/reguser",(req,res)=>{

  //1.1:接收脚手架参数 qid,ans,tag,phone,upwd,truename,uname
  var qid1   = req.query.qid1;
  var ans1   = req.query.ans1;
  var qid2   = req.query.qid2;
  var ans2   = req.query.ans2;  
  var tag   = req.query.tag;
  var loginmode = req.query.phone;
  var upwd  = req.query.upwd;
  var truename = req.query.truename;
  var uname = req.query.uname;
  //2.1:sql
  //  INSERT INTO tx_user(qid,ans,tag,loginmode,upwd,truename,uname)
  //              VALUES (2,"问题1",1,"18516835889",MD5("123"),"zx","zhoux")

  var sql =" INSERT INTO tx_user(ans2,qid2,ans1,qid1,tag,loginmode,upwd,truename,uname)";
      sql+=" VALUES (?,?,?,?,?,?,md5(?),?,?)";

  //3.1:返回结果 
  pool.query(sql,[ans2,qid2,ans1,qid1,tag,loginmode,upwd,truename,uname],(err,result)=>{
    if(err)throw err;

    if(result.affectedRows==0){
      res.send({code:-1,msg:"注册失败！请重新注册。"});
    }else{
      res.send({code:1,msg:"注册成功"});
    }
  });
});

//2：接收用户登录请求
server.get("/login",(req,res)=>{
  //1:接收脚手架参数 uname upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:sql
  //  SELECT uid FROM tx_user WHERE uname = ? AND upwd = md5(?)


  var sql =" SELECT uid FROM tx_user"; 
      sql+=" WHERE uname = ?";
      sql+=" AND upwd = md5(?)";
  //3:返回结果 
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{

      req.session.uid = result[0].uid
      console.log(req.session); 
      res.send({code:1,msg:"登录成功"});
    }
  });
});

//3:查询问题列表