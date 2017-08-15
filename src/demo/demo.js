import { markdown } from 'markdown'
import './demo.scss'

const mdContent = '# Hello *Markdown.js* !'
const htmlContent = markdown.toHTML(mdContent)
const header = document.getElementById('header')

header.innerHTML = htmlContent
header.classList.add('hello')

export function preview () {
  const inputContent = document.getElementById('mdInput').value
  const previewHTML = markdown.toHTML(inputContent)
  const previewer = document.getElementById('previewer')
  previewer.innerHTML = previewHTML
}
