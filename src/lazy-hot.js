// const button = document.createElement('button')
// button.innerHTML = '懒加载资源'
// button.addEventListener('click',()=>{
//     // import 想想VUE的路由懒加载route.js文件中是怎么引入组件的
//     import('./source').then(data=>{
//         console.log(data.default);
//     })
// })
// document.body.appendChild(button)

import str from './source'
console.log(str)
// 热更新
if(module.hot){
    module.hot.accept('./source.js',()=>{
        console.log('updated')
        let str = require('./source')
        console.log(str)
    })
}