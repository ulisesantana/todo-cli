import {Todo} from '../entities'

export function renderTodoList(todos: Todo[]): void  {
  console.log(todos)
  console.log(`${todos.length} pending tasks.`)
}
