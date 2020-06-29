const button = document.createElement('button')

button.innerHTML = '懒加载资源'
button.addEventListener('click',()=>{
    // import 想想VUE的路由懒加载route.js文件中是怎么引入组件的
    import('./source').then(data=>{
        console.log(data.default);
    })
})
document.body.appendChild(button)