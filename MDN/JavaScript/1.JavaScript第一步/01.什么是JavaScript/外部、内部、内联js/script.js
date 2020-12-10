
function createParagraph() {
    let para = document.createElement('p')
    para.textContent = '你点击了这个按钮!'
    document.body.appendChild(para)
}

const buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', createParagraph)
}