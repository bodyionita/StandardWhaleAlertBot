const keep_alive = require('./keep_alive')
keep_alive.keep_alive()

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




async function main() {
  data = await get_data()
  return data;
}

main()
    .then(text => {
        console.log(text);
    })
    .catch(err => {
        // Deal with the fact the chain failed
    });




    