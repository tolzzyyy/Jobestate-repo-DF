import apiClient from "./api";

// Function to fetch jobs
const fetchJobs = async () => {
  try {
    const response = await apiClient.get("/jobs");
    console.log("Jobs fetched successfully:", response.data);
    return response.data; // Return the fetched jobs
  } catch (error) {
    console.error("Error fetching jobs:", error.response?.data || error.message);
    return [];
  }
};

// Call the fetchJobs function
fetchJobs();


// Fetch a single job by ID
export const fetchJobById = async (jobId) => {
  try {
    const response = await apiClient.get(`/jobs/${jobId}`);
    return response.data; // Return the job details
  } catch (error) {
    console.error(`Error fetching job with ID ${jobId}:`, error);
    throw error;
  }
};

// Create a new job (for employers)
export const createJob = async (jobData) => {
  try {
    const response = await apiClient.post("/jobs", jobData);
    console.log("Job created successfully:", response.data);
  } catch (error) {
    console.error("Error creating job:", error.response?.data || error.message);
  }
};
