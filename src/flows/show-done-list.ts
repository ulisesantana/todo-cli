import {TodoRepository} from '../repository/todo'
import {renderDoneList} from '../components'

export function showDoneList() {
  renderDoneList(TodoRepository.getAllDone())
}
