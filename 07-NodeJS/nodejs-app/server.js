var admin = require("firebase-admin");
var faker = require("faker");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cad2122-joaoramos-default-rtdb.europe-west1.firebasedatabase.app"
});

var database = admin.database();

database.ref('messages').set({
    'message': faker.lorem.sentence(10),
    'type': faker
            .helpers.randomize(['primary', 'success', 'warning', 'danger'])
});