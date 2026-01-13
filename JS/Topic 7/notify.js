import { getActiveUsers } from "./utils.js";
import { sendEmail } from "./email.js";

export function notifyActiveUsers() {
  const activeUsers = getActiveUsers();

  activeUsers.forEach((user) => {
    sendEmail(user.email, `Hello ${user.name}, welcome back!`);
  });
}
