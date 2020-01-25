import {inputText, inputSelect} from '../components'
import {Todo} from '../entities/todo'

const todosToChoices = ({id, title}: Todo) => ({title,
  value: id,
})

export async function renderEditForm(todos: Todo[]): Promise<{id: string; title: string}> {
  const id = await inputSelect('Which one you want to edit?', todos.map(todosToChoices))
  const title = await inputText('Edit', todos.find(({id: todoId}: Todo) => Number(todoId) === Number(id))?.title)

  return {id, title}
}
