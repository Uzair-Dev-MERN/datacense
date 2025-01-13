import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";
import { config } from "./index";

export interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

// Create an axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: `${config.backendUrl}/api`,
});

// Set up interceptors
const setupInterceptors = (authContext: AuthContextType) => {
  // Request interceptor
  apiClient.interceptors.request.use(
    (requestConfig: InternalAxiosRequestConfig) => {
      const { token } = authContext;
      if (token) {
        // Create headers using AxiosHeaders class
        requestConfig.headers = new AxiosHeaders({
          ...requestConfig.headers,
          Authorization: `Bearer ${token}`,
        });
      }
      return requestConfig;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      if (error.response?.status === 401) {
        authContext.logout(); // Handle 401 errors
      }
      return Promise.reject(error);
    }
  );
};

export { apiClient, setupInterceptors };
