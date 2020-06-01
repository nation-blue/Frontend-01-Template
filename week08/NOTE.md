# 每周总结可以写在这里


## 重学CSS
### 选择器语法
#### 简单选择器
- *
- 标签  svg|a
- .
- #
- [attr]
- :hover
- ::before

#### 复合选择器
- <简单选择器><简单选择器><简单选择器>
- * div 必须写着最前面

#### 复杂选择器
- <复合选择器><sp><复合选择器>
- <复合选择器>">"<复合选择器>
- <复合选择器>"~"<复合选择器>
- <复合选择器>"+"<复合选择器>
- <复合选择器>"||"<复合选择器>

#### 选择器列表
- ,


### 选择器优先级

- [id class伪类 tag伪元素] - 计数 - [n n n]


### 选择器伪类
- 链接/行为
* :any-link
* :link :visited
* :hover
* :active
* :focus
* :target

- 树结构
* :empty
* :nth-child()
* :nth-last-child()
* :first-child
* :last-child
* :only-child

- 逻辑型
* :not
* :where
* :has


### 选择器伪元素

- ::before 无中生有
- ::after 无中生有

- 为什么 first-line 不能设置float，first-letter可以设置？
- ::first-line 	排版后的第一排
- ::first-letter 源码中第一个文字




## 重学CSS
### 排版
#### 盒（Box）
- margin
- padding
- border
- width
- box-sizing

#### 正常流
- 从左到右，满行换行，从上到下
- 正常流 行模型 IFC  
* 一个盒里面没有文字，基线在底部
* 有文字，基线是文字基线
* inline 可能产生多个盒

#### float clear
- 文字绕排 使用 float
- 布局可以用flex等，尽量就不去用 float了

#### margin折叠
- 只会发生在BFC的上下
- margin和BFC结合后，产生的各种奇特问题

#### inline
- flex inline-flex
- table inline-table
- grid	inline-grid
- block	inline-block
- inline
- run-in

#### flex
- 主轴 交叉轴




#### 笔记：
- block-level 表示可以被放入bfc
- block-container	表示可以容纳bfc
- block-box = block-level + block-container
- block-box 如果 overflow 是 visible，那么就跟父bfc合并

- outline 

