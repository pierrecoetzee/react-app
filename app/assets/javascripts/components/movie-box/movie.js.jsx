var Movie = React.createClass({
    render: function() {
        return (
            <div className="movie">
                <div>{this.props.name}</div>
                <div>{this.props.desc}</div>
            </div>
        );
    }
});

Movie.propTypes = {
    name: React.PropTypes.string,
    desc: React.PropTypes.string
};
