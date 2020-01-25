import {Todo} from '../../entities'
import {renderTodoList} from '../molecules'

export function renderDoneList(todos: Todo[]): void  {
  console.log(`You have done ${todos.length} tasks:`)
  renderTodoList(todos)
}
