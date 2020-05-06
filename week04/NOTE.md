# 每周总结可以写在这里

## 事件循环

### 宏任务 微任务
- 任何代码都是微任务，几个微任务会聚合成宏任务
- 出了JavaScript引擎就是宏任务，没出就是微任务
- 同步代码也是微任务
- 有than, 可能产生在一个宏任务中有多个微任务
- 一切js代码都是在微任务中执行的
- 一个宏任务中只有一个微任务队列


```javascript
new Promise(resolve => resolve()).then(()=>console.log("1"))
setTimeout(function(){
	console.log("2")
}, 0)
console.log(3);

// 3 1 
// 2
```

```javascript
async function afoo(){
	console.log("-2");
	await new Promise(resolve => resolve());
	console.log("-1");
	await new Promise(resolve => resolve());
	console.log("-0.5");
}

new Promise(resolve => (console.log("0"), resolve()))
	.then(()=>(
		console.log("1"),
		new Promise(resolve=>resolve())
			.then(()=>console.log("1.5")) ));
	
setTimeout(function(){
	console.log("2")
	new Promise(resolve => resolve()).then(()=>console.log("3"))
}, 0)
console.log("4");
console.log("5");
afoo();

// 宏任务
// 0 4 5 -2
// 1  			// promise 的时候入队
// -1			// afoo() await 的时候入队
// 1.5			// promise promise 的时候入队
// -0.5			// 第二个 await 入队

//宏任务
// 2 3
```

```javascript
async function async1(){
	console.log("1 start");
	await async2();
	console.log("1 end");
}

async function async2(){
	console.log("2");
}

async1();

new Promise(function(resolve){
	console.log("promise");
	resolve();
}).then(function(){
	console.log("then");
})

// 1 start
// 2
// promise

// 1 end

// then

```