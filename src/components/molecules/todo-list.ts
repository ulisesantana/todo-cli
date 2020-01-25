import {Todo} from '../../entities'

export function renderTodoList(todos: Todo[]): void  {
  for (const {title} of todos) {
    console.log(` - ${title}`)
  }
}
