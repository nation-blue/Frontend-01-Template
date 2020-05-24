# 每周总结可以写在这里


## 5.7 结构化程序设计
- JavaScript 结构化程序设计的基础设施

#### JS执行粒度
* JS Context => Realm
* 宏任务
* 微任务 （Promise）
* 函数调用 （Execution Context）
* 语句/声明
* 表达式
* 直接量/变量/this ...
 

#### Realm
- 一套完整的JS内置对象

- antv.vision


#### 函数调用
- 执行上下文栈（Execution Context Stack）
- lexicalEnvironment
	* this
	* new
	* super
	* 变量
- variableEnvironment
	* 历史遗留包袱
	* 处理 var 声明





### 预习浏览器
### 浏览器工作原理
- URL -> HTTP
- HTML -> parse
- DOM -> css computing
- DOM with CSS -> layout
- DOM with position -> render
- bitmap

### URL  --->  屏幕上显示的网页
- 浏览器首先使用http https 协议，向服务端请求页面
- 把请求回来的HTML代码经过解析，构建成DOM树
- 计算DOM树上的CSS属性
- 最后根据CSS属性对元素逐个进行渲染，得到内存中的位图
- 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度
- 合成之后，再绘制到界面上
- 流式处理

### http
- Request
- Response

### https
- 确定请求的目标服务端身份
- 保证传输的数据不会被网络中间节点窃听或者篡改


## 5.9 浏览器




Http 请求组成
POST / HTTP/1.1
Connection: keep-alive
Content-Length: 55
Content-Type: application/json

abc=123&bcd=%3A%3B
注：快速获取 Http 请求头原生报文方式，Network->右键->Copy->Copy request Headers

ReuqestLine
POST    /       HTTP/1.1
method  path   httpVersion
method 包含 OPTIONS GET POST HEAD PUT DELETE TRACE CONNECT

Request Headers[POST method]
Content-Length
表示 body 内容长度

Content-Type
表示请求内容的类型

application/json
application/x-www-form-urlencoded
text/xml
multipart/formdata
Body
application/x-www-form-urlencoded

abc=123&bcd=%3A%3B
application/json

JSON.stringify(json)
HTTP 响应组成
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 798

{"code":0,"data":{"list":[...]}}

StatusLine
HTTP/1.1        200       OK
httpVersion statusCode statusText
Response Headers
Content-Type: application/json; charset=utf-8
Content-Length: 798
Content-Type
响应内容的类型及编码方式

Content-Length
响应内容的长度

Transfer-Encoding
响应内容的传输格式

Response Body
根据 Content-Type 和 Transfer-Encoding 等属性确定 Body

Content-Type为application/json：
{"code":0,"data":{"list":[...]}}

Transfer-Encoding为chunked时：
10 // chunk长度
1234567890 //chunk内容
0 // 内容结束
处理过程
请求处理过程
创建 TCP 客户端
向服务端发送 RequestLine、RequestHeaders、RequestBody
监听服务端返回数据并处理
响应处理过程
客户端接收到服务端返回数据
利用状态机解析 ResponseStatusLine、ResponseHeaders
根据 ResponseHeaders 中 Transfer-Encoding 决定采用哪种方式解析 ResponseBody
利用状态机解析 ResponseBody



