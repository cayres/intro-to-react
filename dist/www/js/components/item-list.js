"use strict";

var React = require("react"),
    Item = require("./item"),
    ItemForm = require("./item-form");

module.exports = React.createClass({
    displayName: "exports",


    getInitialState: function getInitialState() {
        return {
            items: this.props.items
        };
    },

    addItem: function addItem(newItem) {
        var items = this.state.items;
        items.push(newItem);
        this.setState({
            items: items
        });
    },

    render: function render() {

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.header
            ),
            React.createElement(
                "ul",
                null,
                this.state.items.map(function (item) {
                    return React.createElement(
                        Item,
                        { key: item.substr(length - 1) },
                        item
                    );
                })
            ),
            React.createElement(ItemForm, { addItem: this.addItem })
        );
    }

});