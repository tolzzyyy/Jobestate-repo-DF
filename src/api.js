import axios from "axios";

// Base API URL
const API_URL = "https://jobestate-backend-repo-df.onrender.com";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor for requests (optional, for authentication)
apiClient.interceptors.request.use(
  (config) => {
    // Example: Add a token to the headers (if needed)
    const token = localStorage.getItem("authToken"); // or from context/state
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
