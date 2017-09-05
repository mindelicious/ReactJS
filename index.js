var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    boxoffice: 'Boxoffice: $974 755 371',
    director: 'Reżyseria: Chris Columbus',
    desc: 'Film o wariacie z byłyskawicą na czole.',
    image: 'http://natuli.pl/wp-content/uploads/2017/01/hp.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    boxoffice: 'Boxoffice: $987 483 777',
    director: 'Reżyseria:	Rob Minkoff, Roger Allers',
    desc: 'Film o Lwie który był królem.',
    image: 'http://samequizy.pl/wp-content/uploads/2015/09/filing_images_5072c8c117ef.jpg'
  },
  {
    id: 3,
    title: 'Bracia przyrodni',
    boxoffice: 'Boxoffice: 	$128 107 642',
    director: 'Reżyseria: Adam McKay',
    desc: 'Po ślubie swoich rodziców dwóch mężczyzn w średnim wieku zostaje przyrodnimi braćmi i współlokatorami.',
    image: 'http://1.fwcdn.pl/po/16/87/371687/7315892.3.jpg'
  }
];

var MovieTitle = React.createClass({
    render: function() {
        return React.createElement('h2', {}, this.props.titleX)
    }
});

var MovieDescription = React.createClass({
    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('p', this.props.movieX.boxoffice),
                React.createElement('p', this.props.movieX.director),
                React.createElement('p', this.props.movieX.desc)
            )
        )
    }
});

var MovieImage = React.createClass({
    render: function() {
        return React.createElement('img', {src: this.props.imageX})
    }
});

var Movie = React.createClass({
    render: function() {
        return React.createElement('li',
            React.createElement(MovieTitle, {title: this.props.movieX.title}),
            React.createElement(MovieTitle, {movieX: this.props.movieX}),
            React.createElement(MovieTitle, {imageX: this.props.movieX.image})
        );
    }
});

var MovieList = React.createClass({
    render: function() {
        var movieElements = this.props.moviesX.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movieX: movie})
        });
        return React.createElement('ul', {}, movieElements);
    }
});
 
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {moviesX: movies})
  );

ReactDOM.render(element, document.getElementById('app'));