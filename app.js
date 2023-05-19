import { fetchJSON } from "./functions/api.js";

try {
const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
console.log(todos)
} catch (e) {
  createElement('div', {
    class: 'alert alert-danger',
    role: 'alert'
  })

}
