var React = require('react');

var Image = React.createClass({

    render: function() {
        return (
            <img src={this.getSource()} />
        );
    },

    getSource: function() {

        return this.props.src.replace(
            '{{version}}',
            this.props.version
        );
    }

});

module.exports = Image;