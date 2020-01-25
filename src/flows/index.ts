import {addTodo} from './add-todo'
import {editTodoDone, editTodoTitle} from './edit-todo'
import defaultFlow from './default'
import {showDoneList} from './show-done-list'

enum Flow {
    ADD = 'add',
    EDIT = 'edit',
    DONE = 'done',
    ARCHIVE = 'archive'
  }

export default new Proxy({
  [Flow.ADD]: addTodo,
  [Flow.ARCHIVE]: showDoneList,
  [Flow.EDIT]: editTodoTitle,
  [Flow.DONE]: editTodoDone,
}, {
  get: (target: Record<string, any>, name: string) => name in target ? target[name] : defaultFlow,
}
)
