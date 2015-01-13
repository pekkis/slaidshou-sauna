var React = require('react');
var Image = require('./Image');

var Dictator = React.createClass({

    render: function() {
        
        return (
            <section>
            
            <h2>
                {this.props.dictator.canonicalRanking}. {this.props.dictator.identity.displayName}
            </h2>

            <Image src={this.props.dictator.imageUrl} version="card::x:50" />

            </section>
        );
    }

});

module.exports = Dictator;