var center = require('center');
var nav = require('nav');
var fs = require('fs');
var insertCss = require('insert-css');

var css = fs.readFileSync(__dirname + '/start-menu.css');
insertCss(css);

module.exports = function (items) {
    var div = document.createElement('div');
    div.setAttribute('class', 'start-menu');
    document.body.appendChild(center(div));

    items = items || [
        {name: 'Start', href: '/start'}
    ];
    nav('.start-menu', items);
};
