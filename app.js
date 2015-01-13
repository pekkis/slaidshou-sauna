/**
 * @jsx React.DOM
 */

var React = require('React');
var Slideshow = require('./components/Slideshow');

var tussi = React.render(<Slideshow/>, document.getElementById('app'));

setTimeout(function() {

    tussi.setState({
        'slides': tussi.state.slides.push({
            'title': 'Kuljun rippijuhlat',
            'text': 'Korkkasimme monadin jos toisenkin'
        })
    });

}, 5000);

