var pkg = require('../package.json');

// 兼容 search-util 和 @xiping.wang/search-util 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * search-util ${version} (https://github.com/xiping.wang/search-util)
 * API https://github.com/xiping.wang/search-util/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} xiping.wang. All Rights Reserved
 * Licensed under MIT (https://github.com/xiping.wang/search-util/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
