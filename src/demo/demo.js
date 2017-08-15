import { markdown } from 'markdown'

const mdContent = '# Hello *Markdown.js* !'
const htmlContent = markdown.toHTML(mdContent)
document.write(htmlContent)

const preview = function () {
  const inputContent = document.getElementById('mdInput').value
  const previewHTML = markdown.toHTML(inputContent)
  window.console.log(previewHTML)
  document.getElementById('previewer').innerHTML = previewHTML
}
