import http from ".";

const authApi = {
  registerAccount(body) {
    return http.post("register", body);
  },
  login(body) {
    return http.post("login", body);
  },
};

export default authApi;
