import * as os from 'os'
import * as path from 'path'

import * as low from 'lowdb'
import  * as FileSync from 'lowdb/adapters/FileSync'

export default ((Adapter: any, lowDB: any) => {
  const adapter = new Adapter(path.join(os.homedir(), '.todo-cli.db.json'))
  const db = lowDB(adapter)

  // Set some defaults
  db.defaults({todos: [], user: {}, idCount: 1}).write()
  return db
})(FileSync, low)
