var React = require('react');
var belle = require('belle');
var TextInput = belle.TextInput;

var App = React.createClass({

    render: function() {
        return (
            <div>
                <TextInput defaultValue="Update here and see how the input grows …" />
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('react-root'));