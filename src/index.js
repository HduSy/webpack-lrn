require('./index.sass')
// import './home'
// import './other'
console.log('index')
console.log($);
import image from './TK18_WEB_Road_Marquees_Road.jpg'
console.log(image);
let img = new Image()
img.src = image
document.body.appendChild(img)
// source-map
console.log('SOURCE MAP')
// XMLHttpRequest øÁ”Ú
const xhr = new XMLHttpRequest()
xhr.open('GET', '/user/info', true)
xhr.onload = function () {
    console.log(xhr.response);
}
xhr.send()
console.log(dev);