"use strict";

var React = require("react");

module.exports = React.createClass({
    displayName: "exports",


    getInitialState: function getInitialState() {
        return { newItem: "" };
    },

    onChange: function onChange(e) {
        this.setState({
            newItem: e.target.value
        });
    },

    addItem: function addItem(e) {
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ""
        });
    },

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ""
        });
    },

    render: function render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            React.createElement(
                "label",
                { htmlFor: "new-item" },
                "New Item:"
            ),
            React.createElement("input", { id: "new-item", value: this.state.newItem, onChange: this.onChange }),
            React.createElement(
                "button",
                { type: "button", onClick: this.addItem },
                "Add Item"
            )
        );
    }

});