export class Todo {
  constructor(public id: number, public title: string, public done: boolean = false) {
    this.done = false
  }
}
