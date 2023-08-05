/* 
*let's say if u want to create like this 
* <div id='parent>
*   <div id='children>
*       <h1>This is h1 tag</h1>
*       <h2>This is h2 tag</h2>
*   </div>
*</div>
*/
// CreateElement accepts 3 argunents first tagName, second Attributes as Object, third Content , 
// it maybe content or again child component or anything, if  parent has two or more children we will pass childrens as an array
const parent = 
React.createElement('div', { id: 'parent' }, 
React.createElement('div', { id: 'children' }, [React.createElement('h1', {}, 'This is h1 tag'), React.createElement('h2', {}, 'This is h2 tag')]))

const heading = React.createElement('h1', {}, 'This is h1 tag from root')
const rootEl = ReactDOM.createRoot(document.getElementById('root'))
rootEl.render(parent)