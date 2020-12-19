const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */

for (let i = 1; i <= 5; i++) {
    addImg(`images/pic${i}.jpg`)
}

function replaceBigImage(imgName) {

}

function addImg(imgName) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgName);
    thumbBar.appendChild(newImage);

    newImage.onclick = function () {
        replaceBigImage(imgName)
        displayedImage.setAttribute('src', imgName)
    }
}

/* 编写 变暗/变量 按钮功能 */
overlay.style.backgroundColor = 'black'
overlay.style.opacity = 0
btn.onclick = function () {
    console.log(overlay.style.opacity)
    if (overlay.style.opacity == 0) {
        btn.textContent = '变亮'
        overlay.style.opacity = 0.4
    } else {
        btn.textContent = '变暗'
        overlay.style.opacity = 0
    }
}

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    Notification.requestPermission();
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== 'granted')
        Notification.requestPermission();
});


function notifyMe() {
    
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: 'Hey there! You\'ve been notified!',
        });
        notification.onclick = function () {
            window.open('http://stackoverflow.com/a/13328397/1269037');
        };
    }
}

// btn.onclick = notifyMe