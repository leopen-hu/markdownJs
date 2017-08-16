import { markdown } from 'markdown'
import test from './test'
import './demo.scss'
import debounce from 'lodash/debounce'

const mdContent = '# Hello *Markdown.js* !'
const htmlContent = markdown.toHTML(mdContent)
const header = document.getElementById('header')

header.innerHTML = htmlContent
header.classList.add('hello')

test()

function preview () {
  const inputContent = document.getElementById('mdInput').value
  const previewHTML = markdown.toHTML(inputContent)
  const previewer = document.getElementById('previewer')
  previewer.innerHTML = previewHTML
}

const execPreview = debounce(preview, 500)

document.getElementById('mdInput').addEventListener('keypress', () => {
  execPreview()
})
