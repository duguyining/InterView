var CreateDiv = function (html) {
  this.html =html;
  this.init();
}

CreateDiv.prototype.init =function () {
  var div = document.createElement('div');
  div.innerHTML=this.htmll
  document.boby.appendChild(div);
}

//代理实现单体模式
var ProxyMode = (function(){
  var instance;
  return function (html){
    if (!instance) {
      instance =new CreateDiv("test")
    }
    return instance;
  }
})();

var a =new ProxyMode("aaa");
var b = new ProxyMode("bbb");
console.log(a===b);// true