var React = require('react');
var Dictator = require('./Dictator');

var Immutable = require('immutable');
var ImmutableRenderMixin = require('react-immutable-render-mixin');

var $ = require('jQuery');

var Dictators = React.createClass({

    mixins: [ImmutableRenderMixin],
    
    getInitialState: function() {
        return {
            dictators: Immutable.List([])
        };
    },

    render: function() {

        var dictators = this.state.dictators.map(function(dictator, key) {
            return <Dictator key={key} dictator={dictator} />
        });

        return (
            <div className="dictators">
                {dictators.toArray()}
            </div>
        );
    },

    componentDidMount: function() {

        var self = this;
        $.get('http://diktaattoriporssi.com/api/dictator').then(function(dictators) {
            self.setState({
                dictators: Immutable.List(dictators)
            });
        })
    }

});

module.exports = Dictators;