import {TodoRepository} from '../repository/todo'
import {renderPendingTodoList} from '../components'

export default function () {
  renderPendingTodoList(TodoRepository.getAllTodo())
}
