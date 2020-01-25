import {Command, flags} from '@oclif/command'
import flows from './flows'

class TodoCli extends Command {
  static description = 'describe the command here'

  static args = [
    {name: 'action'},
  ]

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  async run() {
    flows[this.parse(TodoCli).args.action]()
  }
}

export = TodoCli
