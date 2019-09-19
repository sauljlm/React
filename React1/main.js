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
    React.createElement(Image, {url: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}),
    React.createElement(Title, {title: 'hellow world'}),
    React.createElement(Paragraph, {paragraph: 'Lorem ipsum'}),
  ])
}

ReactDOM.render (
  React.createElement('div', {className: 'container'}, [
    React.createElement('div', {className: 'row'}, [ 
      React.createElement(Card)
    ])
  ]),
  document.getElementById('root')
)
