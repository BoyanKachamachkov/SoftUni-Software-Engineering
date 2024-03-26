import {render as renderBase, html} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'

// create decorative render function to avoid selecting root in every file
// TODO edit root per exam HTML

const root = document.querySelector('root')

function render(templateResult){
    renderBase(templateResult, root)
}

export{
    render,
    html,
    page
}