import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const db = getDatabase();
const messagesRef = ref(db, 'messages');
onValue(messagesRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});