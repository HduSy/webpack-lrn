require('./home.css')
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