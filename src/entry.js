import { sayFoo } from '../fake_node_module/foo'
console.log('test')

sayFoo()

const main = document.querySelector('main')
if (process.env.THEME_DARK) {
  main.innerHTML = "<div>THEME DARK</div>"
}
if (process.env.THEME_LIGHT) {
  main.innerHTML = "<div>THEME LIGHT</div>"
}

if(!process.env.THEME_DARK && !process.env.THEME_LIGHT) {
  main.innerHTML = "<div>Default theme</div>"
}