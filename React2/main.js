const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

function Title(props) {
  return React.createElement('h1', {className: 'title', title: props.title}, `${props.title}`)
}

function Paragraph(props) {
  return React.createElement('p', {className: 'paragraph' }, `${props.paragraph}`)
}

function Image(props) {
  return React.createElement('img', {className: 'image', src: props.url})
}

function Card(props) {
  return React.createElement('div', {className: 'card col-sm-12 col-md-4'}, [
    React.createElement(Image, {url: `${props.image}`}),
    React.createElement(Title, {title: `${props.title}`}),
    React.createElement(Paragraph, {paragraph: `${props.paragraph}`}),
  ])
}

fetch(url)
    .then(data => data.json())
    .then(data => {
      const elements = [];
      console.log(data._embedded.episodes);
      data._embedded.episodes.forEach(element => {
        elements.push(React.createElement(Card, {image: `${element.image.medium}`, title: `${element.name}`, paragraph: `${element.summary}`})
        );
      }),

      ReactDOM.render (
        React.createElement('div', {className: 'container'}, [
          React.createElement('div', {className: 'row'}, elements)
        ]),
        document.getElementById('root'),
      )
    });