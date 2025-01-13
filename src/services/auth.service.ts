import { apiClient } from "../config/apiClient";

const register = async (credentials: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  return await apiClient.post("/auth/register", credentials);
};

const login = async (credentials: { email: string; password: string }) => {
  return await apiClient.post("/auth/login", credentials);
};

export { login, register };
