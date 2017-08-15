let mdContent = "# Hello *Markdown.js* !"
htmlContent = markdown.toHTML(mdContent)
document.write(htmlContent)

const preview = function () {
    let inputContent = document.getElementById('mdInput').value
    previewHTML = markdown.toHTML(inputContent)
    window.console.log(previewHTML);
    document.getElementById('previewer').innerHTML = previewHTML
}