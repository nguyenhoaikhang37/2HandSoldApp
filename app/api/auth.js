import apiClient from "./client";

const login = (email, password) => apiClient.post("/auth", { email, password });

const register = (userInfo) => apiClient.post("/users", userInfo);

export default {
  login,
  register,
};
