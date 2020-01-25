import {Todo} from '../../entities'
import {renderTodoList} from '../molecules'

export function renderPendingTodoList(todos: Todo[]): void  {
  console.log(`You have ${todos.length} pending tasks:`)
  renderTodoList(todos)
}
