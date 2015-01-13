/**
 * @jsx React.DOM
 */

var slideshow = {

    title: 'Kuljun suuruuden ylistyksen slaidshou',
    slaids: [
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
};

var React = require('React');
var Slideshow = require('./components/Slideshow');

var tussi = React.render(<Slideshow/>, document.getElementById('app'));

setTimeout(function() {

    tussi.setState({
        'slideshow': {
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
                },
                {
                    'title': 'Kuljun rippijuhlat',
                    'text': 'Kuljun rippijuhlissa korkkasimme monadin jos toisenkin!!!'
                }

            ]
        }
    })

}, 5000);

