/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2018-08-15 11:34:44
 * @LastEditTime: 2019-03-05 16:25:28
 */
//图片压缩
function imgToMin(files, id) {
  // 建立绘图空间
  var cnv = document.getElementById("myCanvas");
  var cntx = cnv.getContext("2d");

  var imgNew = new Image();
  var imgAgo = document.getElementById("ago");
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var reader = new Filereader();
    reader.readAsDataURL(file);
    // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
    // readAsDataURL开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容。
    reader.onload = function(e) {
      url = e.target.result;
      imgNew.src = url;
      imgAgo.src = url;
      imgAgo,
        (onload = function() {
          var m = imgNew.width / imgNew.height;
          cnv.height = 100;
          cnv.width = 100 * m;
          cntx.drawImage(imgAgo, 0, 0, 100 * m, 100);
        });
    };
  }
}

function imgInfo() {
  var img = document.getElementById("myCanvas").toDataURL("image/png");
  var img2 = document.getElementById("press");
  img.src = img2;
  console.log(`压缩后${ParseInt(img.length / 1024)}kb`);
}
