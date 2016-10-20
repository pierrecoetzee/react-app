var MovieBox = React.createClass({

    getInitialState: function(){
      return {data: []}
    },
    componentDidMount: function(){
        this.loadComponentsFromServer()
        setInterval(this.loadComponentsFromServer, this.props.pollInterval);
    },
    loadComponentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    render: function() {
        return (
            <MovieList data={this.state.data}/>
        );
    }
});


ReactDOM.render(
    <MovieBox pollInterval={12000} url="/movies/" />,
    document.getElementById('movie-box')
);