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
    return (
      React.createElement('h2', {}, this.props.titleX)
    );
  }
});

var MovieDescription = React.createClass({
  render: function() {
    return (
      React.createElement('div', {}, 
        React.createElement('p', {}, this.props.movieX.boxoffice),
        React.createElement('p', {}, this.props.movieX.director),
        React.createElement('p', {}, this.props.movieX.desc)
      )
    );
  }
});

var MovieImage = React.createClass({
  render: function() {
    return (
      React.createElement('img', {src: this.props.movieX.image})
    );
  }
})

var Movie = React.createClass({
    render: function() {
      return (
        React.createElement('li', {},
          React.createElement(MovieTitle, {titleX: this.props.movieX.title}),
          React.createElement(MovieDescription, {movieX: this.props.movieX}),
          React.createElement(MovieImage, {movieX: this.props.movieX})
        )
      );
    }
});

var MoviesList = React.createClass({
    render: function() {
      var moviesElements = this.props.moviesX.map(function(movie) {
        return React.createElement(Movie, {movieX: movie, key: movie.id})
      });

      return (
        React.createElement('ul', {}, moviesElements)
      );
    }
})

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {moviesX: movies})
  );

ReactDOM.render(element, document.getElementById('app'));