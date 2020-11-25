

const myImage = document.querySelector('img')
myImage.onclick = function() {
    mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox.png')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = promptName()
    localStorage.setItem('name', myName)
    setH1Content(myName)
}

function setH1Content(name) {
    myHeading.textContent = 'Mozilla酷毙了，' + name
}

let name =  localStorage.getItem('name')
console.log(name)
if(!name) {
    setUserName()
} else {
    setH1Content(name)
}

function promptName() {
    return prompt('请输入你的名字。')
}

myButton.onclick = setUserName
