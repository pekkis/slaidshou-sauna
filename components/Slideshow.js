var React = require('react');
var Slide = require('./Slide');
var Reveal = require('reveal.js/js/reveal');

var Slideshow = React.createClass({

    revealed: false,

    getInitialState: function() {
        return {
            slideshow: {
                title: 'Kuljun suuruuden ylistyksen slaidshou',
                slides: [
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
                ]
            }
        };
    },

    render: function() {

        var slides = this.state.slideshow.slides.map(function(slide, key) {
            return <Slide key={key} slide={slide} />
        });

        return (
            <div className="slides">
                {slides}
            </div>
        );
    },

    componentDidMount: function() {

        Reveal.initialize({
            width: 960,
            height: 700,
            margin: 0.1,
            minScale: 1.0,
            maxScale: 1.5
        });

    }


});

module.exports = Slideshow;