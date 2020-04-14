function CustomType() {
  this.name = 'tugenhua';
};

CustomType.prototype.getName = function(){
  return this.name;
}

var application = (function(){
  // 私有
  var private = "aa";

  //私有函数
  function A () {};

  //实例化一个对象，返回然后增加公有属性和方法
  var object = new CustomType();
  // 添加公有属性
  object.A = "aa";
  // 添加公有方法
  object.B = function(){
      return privateA;
  }
  // 返回该对象
  return object;
})()