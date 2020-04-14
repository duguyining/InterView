//模块模式的思路是为单体模式添加私有变量和私有方法能够减少全局变量的使用
var singleMode = (function(){
  // 创建私有变量
  var privateNum = 112;
  // 创建私有函数
  function privateFunc(){
      // 实现自己的业务逻辑代码
  }
  // 返回一个对象包含公有方法和属性
  return {
      publicMethod1: publicMethod1,
      publicMethod2: publicMethod1
  };
})();