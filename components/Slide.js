var React = require('react');

var Slide = React.createClass({

    render: function() {
        return (
            <section>

                <h1>{this.props.slide.title}</h1>

                <p>
                {this.props.slide.text}
                </p>

            </section>
        );
    }

});

module.exports = Slide;