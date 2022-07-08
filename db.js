import Dexie from 'dexie'
import dexieCloud from 'dexie-cloud-addon'

export const db = new Dexie('todo-example',
{ addons: [dexieCloud] }
)

db.version(1).stores({
  todo: '@id',
})

database.cloud.configure({
  databaseUrl: 'https://z3zljq0mt.dexie.cloud',
  requireAuth: true,
})
