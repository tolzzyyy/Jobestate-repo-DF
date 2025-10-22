// src/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jobestate-17.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

// REGISTER API
export const register = async (userData) => {
  try {
    let data;
    let headers = {};

  
    if (userData.resume) {
      data = new FormData();
      for (let key in userData) {
        data.append(key, userData[key]);
      }
      headers["Content-Type"] = "multipart/form-data";
    } else {
      data = userData;
    }

    const response = await apiClient.post("/auth/register", data, { headers });
    return response.data;
  } catch (error) {
    console.error("Register error:", error?.response?.data || error.message);
    throw error;
  }
};


// LOGIN API
export const login = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data; // probably { message, user } or something similar
  } catch (error) {
    console.error("Login error:", error?.response?.data || error.message);
    throw error;
  }
};

