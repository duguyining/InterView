// 不使用代理的预加载图片函数如下
var myImage = (function(){
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  var img = new Image();
  img.onload = function(){
      imgNode.src = this.src;
  };
  return {
      setSrc: function(src) {
          imgNode.src = "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif";
          img.src = src;
      }
  }
})();
// 调用方式
myImage.setSrc("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");



// 
var myImage = (function(){
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return function(src){
      imgNode.src = src; 
  }
})();
// 代理模式
var ProxyImage = (function(){
  var img = new Image();
  img.onload = function(){
      myImage(this.src);
  };
  return function(src) {
              myImage("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
      img.src = src;
  }
})();
// 调用方式
ProxyImage("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");