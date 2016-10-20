var handleMovieClick = function(i, movies){
    console.log(movies[i])
}

var MovieList = React.createClass({
    render: function() {
        var movies = this.props.data
        var movieNodes = this.props.data.map(function(movie, i) {
            return (
                <div onClick={handleMovieClick.bind(this, i, movies)} key={movie.id}>
                    <Movie name={movie.name} key={movie.id} desc={movie.desc} />
                </div>
            );
        });
        return (
            <div className="movieList">
                {movieNodes}
            </div>
        );
    }
});
