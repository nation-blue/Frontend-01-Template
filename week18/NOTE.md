# 每周总结可以写在这里

# 1. 工具链 | Dev工具
## 参考链接：
* https://github.com/fsevents/fsevents/

## 2. 工具链 | 设计并实现一个单元测试工具
## 参考链接：

* nyc: <https://www.npmjs.com/package/nyc>
* mocha: <https://mochajs.org/>
* babel: <https://babeljs.io/docs/en/usage>
* ava: <https://github.com/avajs/ava>

## 参考代码：

```js
"ava": {
    "files": [
      "test/*.js"
    ],
    "require": [
      "@babel/register"
    ],
    "babel": {
      "testOptions": {
        "babelrc": true
      }
    }
  }
```

```js
{
  "all": true,
  "include": [
    "src/*.js"
  ],
  "extends": "@istanbuljs/nyc-config-babel"
}
```

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": ["babel-plugin-istanbul"]
}
```



