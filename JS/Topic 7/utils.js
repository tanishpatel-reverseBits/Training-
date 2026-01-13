import { users } from "./data.js";

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function getActiveUsers() {
  return users.filter((user) => user.isActive);
}
