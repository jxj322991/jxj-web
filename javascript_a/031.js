/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2018-08-15 11:34:44
 * @LastEditTime: 2019-03-05 16:25:56
 */
// jsonp
var ele = document.createElement("script");
ele.type = "text/javascript";
ele.src = "http...";
document.head.appendChild(ele);

function on_back(res) {
  var data = stringify(res);
}

// //实现 jsonp 的 php 核心代码
// header('Content-type: application/json');
// //json数据
// $json_data = '{"cod1":1,"msg":"jsonp"}';
// //输出jsonp格式的数据
// echo  "on_back(" . $json_data . ")";
