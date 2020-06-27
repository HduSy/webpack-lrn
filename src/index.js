// import 'bootstrap' //����

require('./index.sass')

// import './home'
// import './other'
console.log('index')
// console.log($);

import image from './TK18_WEB_Road_Marquees_Road.jpg'
console.log(image);
let img = new Image()
img.src = image
document.body.appendChild(img)

// source-map
console.log('SOURCE MAP')
// XMLHttpRequest
const xhr = new XMLHttpRequest()
xhr.open('GET', '/api/user/info', true)
xhr.onload = function () {
    console.log(xhr.response);
}
xhr.send()
// define global variables
console.log(DEV)
console.log(FLAG)
