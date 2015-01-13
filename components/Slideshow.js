var React = require('react');
var Slide = require('./Slide');

var Immutable = require('immutable');
var ImmutableRenderMixin = require('react-immutable-render-mixin')

var Slideshow = React.createClass({

    mixins: [ImmutableRenderMixin],
    
    getInitialState: function() {
        return {
            'title': 'Kuljun suuruuden ylistyksen slaidshou',
            slides: Immutable.List([
                {
                    'title': 'Kuljun syntymä',
                    'text': 'Kulju painoi kahdeksan kiloa syntyessään. Potra poika!'
                },
                {
                    'title': 'Kuljun lapsuus',
                    'text': 'Kuljun lapsuus oli onnellinen'
                },
                {
                    'title': 'Kuljun nuoruus',
                    'text': 'Kulju eli nuoruutensa Kuljulassa.'
                }
            ])
        };
    },

    render: function() {

        var slides = this.state.slides.map(function(slide, key) {
            return <Slide key={key} slide={slide} />
        });

        return (
            <div className="slides">
                {slides.toArray()}
            </div>
        );
    }

});

module.exports = Slideshow;