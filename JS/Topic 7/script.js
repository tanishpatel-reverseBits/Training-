import { notifyActiveUsers } from "./notify.js";
import { getUserById } from "./utils.js";

// Convert old JS to ES6

// Old JS code
function submitForm(name, email, urgent) {
  if (urgent === undefined) {
    urgent = false;
  }

  var message = "Hello " + name + ",\n";
  message = message + "We received your email: " + email + ".\n";

  if (urgent) {
    message = message + "This request is urgent.\n";
  }

  return message;
}
console.log(submitForm("Alice", "alice@gmail.com", true));

// ES6+ Code
const SubmitForm = (name, email, urgent = false) => {
  var message = `Hello ${name},\n
  We received your email : ${email}.\n`;

  if (urgent) {
    message = message + "This request is urgent.\n";
  }

  return message;
};
console.log(SubmitForm("Alice", "alice@gmail.com", true));

// app.js

function startApp() {
  console.log("App started");

  const user = getUserById(1);
  console.log("Logged in user:", user);

  notifyActiveUsers();
}

startApp();

