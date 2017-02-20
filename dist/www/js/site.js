"use strict";

var React = require("react"),
    ReactDOM = require("react-dom"),
    ItemList = require("./components/item-list");

var items = ["item1", "item2", "item3"];

ReactDOM.render(React.createElement(ItemList, { header: "Item List", items: items }), document.querySelector("[class='container']"));