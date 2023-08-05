
const parent = 
React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'children' },
        [React.createElement('h1', {}, 'This is h1 tag'),
        React.createElement('h2', {}, 'This is h2 tag')]
    ))

const heading = React.createElement('h1', {}, 'This is h1 tag from root')
const rootEl = ReactDOM.createRoot(document.getElementById('root'))
rootEl.render(parent)