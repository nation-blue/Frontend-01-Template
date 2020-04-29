# 每周总结可以写在这里

## 4.23

- 如何判断 +0 -0
* 1/0 === Infinity
* 1/(-0) === -Infinity
* 直接取出符号位

- 一个符号位，十一个指数位，隐藏的一个 1，52位数值位

- Expressions
* Member
+ a.b
+ a[b]
+ foo`string`
+ super.b
+ super['b']

	```javascript
	class parent{
		constructor(){
			this.a = 1;
		}
	}
	class child{
		constructor(){
			super();
			console.log(this.a);
		}
	}
	```
	
+ new.target  只能在函数内使用，可以判断是否是被new调用

	```javascript
	function foo(){
		console.log(new.target)
	}
	new foo();
	```
	
+ new Foo()
	- new a()()
	- new new a()


- Call
* foo()
* super()
* foo()['b']
* foo().b
* foo()`abc`


- Left Handside & Right Handside


- Reference
* key value
* delete assign


- Update
* a ++	// 不能加换行
* a --	// 不能加换行
* -- a
* ++ a


- Unary
* delete
* void		void 0
	+ IIFE 
	+ (function(){})()	
	+ void function(){}()	推荐
* typeof
* +
* -
* ~		~~a
* !		!!a
* await


- Multiplicative
* * / %

- Additive 
* + - 

- Shift
* << >> >>>

- Relationship
* < > <= >= instanceof in

- Equality
* ==
* !=
* ===
* !==

- Bitwise
* & ^ |

- Logical
* && ||  短路

- Conditional
* ? :  也是短路，执行函数，可以判断除是短路


- javascript 有几种加法
* number
* string


- Number String Symbol Boolean
* new Number()
* new String()
* new Boolean()
* 以上三个函数不带new，就是强制类型转换
* Symbol 可以直接用，但是不能 new
* 1 + {}
* 1 + (valueOF(){return 2})
* 1 + (toString(){return 2})
* 1 + (toString(){return "2"})
* 1 + (toString(){return "2"}, valueOf(){return 2})



## 4.25

#### Atom
###### Grammar
- 简单语句
* ExpressionStatement
+ a = 1 + 2;

* EmptyStatement
+ ;

* DebuggerStatement
+ debugger;

* ThrowStatement
+ throw a;

* ContinueStatement
+ continue label1;

* BreakStatement
+ break label2;

* ReturnStatement
+ return 1+2;




- 组合语句
* BlockStatement
+ {} 多条语句括起来，形成一条语句
+ [[type]]:normal
+ [[value]]:--
+ [[target]]:--

* IfStatement


* SwitchStatement


* IterationStatement
+ while(){}  会消费 continue break
+ do{}while()
+ for(;;){}
+ for( in ){}
	+ 单独的 in 运算符，可以查看某元素是否在对象里，某索引是否在数组里
+ for( of ){}
+ for await(of)
	+ for await(let e of []){}

* WithStatement
```javascript
function foo(){
	var o = {x:1};
	x = 2;
	with(o){
		x = 3;
	}
	console.log(x);
}
// 看了一些资料，发现with的弊端还是比较严重的
```
* LabelledStatement
* TryStatement
+ try{}catch(){}finally{}


- 声明
* FunctionDeclaration
* GeneratorDeclaration
```javascript
function* foo(){
	yield 1;
	yield 2;
	var i = 3;
	while(i){
		yield i;
		i++;
	}
}
var gen = foo();
gen.next();
gen.next();
gen.next();
gen.next();
```
* AyncFunctionDeclaration
```javascript
function sleep(d){
	return new Promise(resolve => setTimeout(resolve, d));
}
void async function(){
	var i = 0;
	while(true){
		console.log(i++)
		await sleep(1000)
	}
}();
```
* AsyncGeneratorDeclaration
```javascript
function sleep(d){
	return new Promise(resolve => setTimeout(resolve, d));
}
async function* foo(){
	var i = 0;
	while(true){
		console.log(i)
		yield i++;
		await sleep(1000)
	}
};
var gen = foo();
gen.next();gen.next();gen.next();gen.next();
```

* VariableStatement
+ var 1、要在function中写，最好是开头
+ var 2、不建议写在子结构中
+ let/const 1、不能重复声明
+ let/const 1、不能先调用后声明

* ClassDeclaration
+ 不能重复声明
+ 不能先调用后声明

* LexicalDeclaration

- 对象：不是数据存储的工具
- 结构体：是数据存储的工具
- Object
* 任意两个对象都不会相等，只可能是同一个对象
* 对象三要素：唯一性、状态、行为
* state identifier behavior

- Class base
* 归类，多继承，c++
* 分类，单继承结构，有一个基类 Object

- Prototype
- 原型，更接近人类原始认知
- 任何对象仅仅需要描述它自己与原型的区别即可

- Object Exercise
* 命名是要改变行为
* 做抽象

- Object in JavaScript
* key value 
* key : symbol string
* val : data Accessor

- Object API/Grammar
* {} . [] Object.definedProperty
* Object.create / Object.setPrototypeOf / Object.getPrototypeOf
* new / class / extends
* new / function / prototype

- 特殊对象


###### Runtime
- Completion Record
* [[type]] : normal, break, continue, return, or throw
* [[value]] : Types
* [[target]] : label

- Lexical Enviorment
