"use strict";

const
    React = require("react"),
    ReactDOM = require("react-dom"),
    ItemList = require("./components/item-list");

let items = [
    "item1", "item2", "item3"
]

ReactDOM.render(<ItemList header="Item List" items={items} />, 
    document.querySelector("[class='container']"));
