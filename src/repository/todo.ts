import db from '../db'
import {Todo} from '../entities/todo'

export const TodoRepository = {
  getAll() {
    return db.get('todos').value()
  },
  create(title: string): void {
    const newId = db.get('idCount').value()
    db.get('todos').push(new Todo(newId, title)).write()
    db.set('idCount', newId + 1).write()
  },
  update(id: number, title: string): void {
    db.get('todos')
    .find({id})
    .assign({title})
    .write()
  },
  delete(id: number): void {
    db.get('todos')
    .remove({id})
    .write()
  },
}
