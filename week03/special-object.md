## js中特殊对象

### Function Object

- [[call]] 视为函数Function
- [[Construct]] 可以被new 操作符调用，根据new的规则返回对象。

### Array Object

- [[DefineOwnProperty]]
- Property == length
- 设置对象的length属性，根据length的变化对对象进行操作
- newLength > length 用空扩充数组
- newLength < length 截取数组

### String Object

- string的length是不可写不可配的。

### Arguments Object

- [[callee]] 视为函数参数对对象，伪数组 caller

### Object

- [[Get]] property被访问时调用 get
- [[Set]] property被赋值时调用 set
- [[GetPrototypeOf]] 对应getPrototypeOf方法 获取对象原型
- [[SetPrototypeOf]] 对应setPrototypeOf方法 设置对象原型
- [[GetOwnProperty]] getOwnPropertyDescriptor 获取对象私有属性的描述列表
- [[HasProperty]] hasOwnProperty 私有属性判断
- [[IsExtensible]] isExtensible对象是否可扩展
- [[PreventExtensions]] preventExtension控制对象是否可以添加属性
- [[DefineOwnProperty]] defineProperty 定义对象属性
- [[Delete]] delete 操作符
- [[OwnPropertyKeys]] Object.keys() Object.entries() Object.values()
- [[Call]] 能够调用call

### Module Namespece

- [[Module]] 视为一个引入的模块
- [[Exports]] 视为一个导出的模块

### 错误对象
- 错误对象是一种特殊的基本对象。它们拥有基本的 Error 类型，同时也有多种具体的错误类型。
- Error（通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象也可用于用户自定义的异常的基础对象。）
- new Error([message[, fileName[,lineNumber]]])
- AggregateError
- EvalError
- RangeError(标明一个错误，当一个值不在其所允许的范围或者集合中。)
- ReferenceError(代表当一个不存在的变量被引用时发生的错误。)
- SyntaxError(对象代表尝试解析语法上不合法的代码的错误。)
- TypeError(对象用来表示值的类型非预期类型时发生的错误语法)
- URLError(URIError 对象用来表示以一种错误的方式使用全局URI处理函数而产生的错误。)



