const Realm = require('realm-web');
const app = new Realm.App({ id: 'stakeborgdaoexplorer-wutjr' })


user = null;

async function get_data() {
  user = await app.logIn(Realm.Credentials.anonymous());
  client = app.currentUser.mongoClient("mongodb-atlas");
  dbdata = await client
        .db("stakeborgdao-explorer")
        .collection("snapshot")
        .find({}, { sort: { snapshot: -1 }, limit: 1 });
  return dbdata;
}