import {Command, flags} from '@oclif/command'
import {TodoRepository} from './repository/todo'
import {inputText} from './components'
import {renderEditForm, renderTodoList} from './views'

class TodoCli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    add: flags.boolean({char: 'a', description: 'add new task'}),
    edit: flags.boolean({char: 'e', description: 'edit task'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    const {flags} = this.parse(TodoCli)
    const todos = TodoRepository.getAll()

    if (flags.edit) {
      const {id, title} = await renderEditForm(todos)
      TodoRepository.update(Number(id), title)
    }

    if (flags.add) {
      TodoRepository.create(await inputText('Title for your new todo: '))
    }

    renderTodoList(todos)
  }
}

export = TodoCli
