//代理对象可以代替本体被实例化，并使其可以被远程访问；
//它还可以把本体实例化推迟到真正需要的时候；对于实例化比较费时的本体对象，或者因为尺寸比较大以至于不用时不适于保存在内存中的本体，我们可以推迟实例化该对象；

var TeaMilkGirl = function (name) {
  this.name = name;
};

var Ceo = function (girl){
  this.girl = girl;
  this.sendMarriageRing = function(ring) {
    console.log("Hi " + this.girl.name + ", ceo送你一个礼物：" + ring);
  }
};

var ProxyObj = function (girl) {
  this.girl = girl;
  this.sendGift = function (gift){
    (new Ceo(this.girl)).sendMarriageRing(gift);
  }
};

// 初始化
var proxy = new ProxyObj(new TeaAndMilkGirl("奶茶妹"));
console.log(proxy.sendGift("结婚戒"));
 // Hi 奶茶妹, ceo送你一个礼物：结婚戒

