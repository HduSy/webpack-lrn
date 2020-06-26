require('./home.css')
const moment = require('moment')
// manual require zh-cn rather than all languages 310Kb=>78.6Kb
moment.locale(require('moment/locale/zh-cn'))
console.log('home')
// ES2015+ transform
const func = () => {
    console.log('arrow function test');
}
func()
const str = 'hello world'
// API
function* gen() {
    yield 1;
}
console.log(gen().next());
// case methods
str.includes('o')
console.log(moment().endOf('day').fromNow());