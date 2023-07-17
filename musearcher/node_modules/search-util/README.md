# [search-util](https://github.com/The-End-Hero/search-util)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/The-End-Hero/search-util)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com//The-End-Hero/search-util/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/xiping.wang/search-util.svg?branch=master)](https://travis-ci.org/xiping.wang/search-util)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/search-util)
[![NPM downloads](http://img.shields.io/npm/dm/search-util.svg?style=flat-square)](http://www.npmtrends.com/search-util)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/xiping.wang/search-util.svg)](http://isitmaintained.com/project//The-End-Hero/search-util "Percentage of issues still open")

多环境的，简单无依赖的前端搜索库，支持中英文,支持拼音模糊搜索。

## 使用者指南
通过npm下载安装代码

```bash
$ npm install --save search-util
```

如果你是node环境

```js
var searchUtil = require('search-util');
```

如果你是webpack等环境

```js
import searchUtil from 'search-util';
```

如果你是requirejs环境

```js
requirejs(['node_modules/search-util/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/search-util/dist/index.aio.js"></script>
```



## API

- getFilterArr(arr, search, key = 'id')

```javascript
/**
 * 搜索字段
 * @param arr 搜索数组 [{...},{...},...]
 * @param search 需要搜索内容
 * @param key 字段 默认id
 * @returns {*}
 */
```

- getFilterArrAll(arr, search)

```javascript
/**
 * 全部搜索
 * @param arr 搜索数组 [{...},{...},...]
 * @param search 需要搜索内容
 * @returns {*}
 */
```
