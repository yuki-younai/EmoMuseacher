# 文档
ES6之前的继承方案，可继承ES6的class

## inherits
圣杯模式，将函数A继承函数B，支持继承ES6的class，同node中的inherits兼容，兼容bable逻辑，能够继承静态属性

两个注意点：

- 用到了Object.create，需要es5环境，不支持es5需要es5shim
- 静态属性继承不支持ie10及以下

```js
function A() {
    this.a = 1;
}
A.prototype.aa = 1;

function B() {
    A.call(this);
    this.b = 2;
}

inherits(B, A);

B.prototype.bb = 2;


var b = new B();

b.a // 1
b.aa // 1
b.b // 2
b.bb // 2
```

## inheritsByES3
功能同inherits，但能够兼容es3环境

## inheritsByForce
功能同inherits，但ie10以下也支持静态属性兼容，但采用拷贝方式，不支持动态继承
