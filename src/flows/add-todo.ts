import {TodoRepository} from '../repository/todo'

import {inputText} from '../components'

export async function addTodo() {
  TodoRepository.create(await inputText('Title for your new todo: '))
}
