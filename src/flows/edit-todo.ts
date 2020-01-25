import {TodoRepository} from '../repository/todo'

import {inputSelect, inputText} from '../components'
import {Todo} from '../entities'

const todosToChoices = ({id, title}: Todo) => ({title,
  value: id,
})

async function getTodoAndId(message = 'Which one you want to edit?') {
  const todos = TodoRepository.getAllTodo()
  const id = await inputSelect(message, todos.map(todosToChoices))
  return {id, todos}
}

export async function editTodoTitle() {
  const {id, todos} = await getTodoAndId()
  const title = await inputText('Edit', todos.find(({id: todoId}: Todo) => Number(todoId) === Number(id))?.title)
  TodoRepository.update(Number(id), {title})
}

export async function editTodoDone() {
  const {id} = await getTodoAndId('Which one is done?')
  TodoRepository.update(Number(id), {done: true})
}
