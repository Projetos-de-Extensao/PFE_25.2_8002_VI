// src/auth.js
export const auth = {
  login(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  },
  isLogged() {
    return !!localStorage.getItem("user");
  }
};
