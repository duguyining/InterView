// 可以用来划分命名空间，减少全局变量的数量。
// 使用单体模式可以使代码组织的更为一致，使代码容易阅读和维护。
// 可以被实例化，且实例化一次。
// 对象字面量


// 单体模式
var Singleton = function(name){
  this.name = name;
};
Singleton.prototype.getName = function(){
  return this.name;
}
// 获取实例对象
var getInstance = (function() {
  var instance = null;
  return function(name) {
      if(!instance) {
          instance = new Singleton(name);
      }
      return instance;
  }
})();
// 测试单体模式的实例
var a = getInstance("aa");
var b = getInstance("bb");

// 由于单体模式只实例化一次，因此第一次调用，返回的是a实例对象，当我们继续调用的时候，b的实例就是a的实例，因此下面都是打印的是aa；
