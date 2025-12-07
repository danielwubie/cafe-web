// frontend/src/api/api.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
// const API_BASE_URL = "http://localhost:5000/api";
import axios from "axios";

export const fetchMenu = async () => {
  console.log("fetching menu ..... "+`${API_BASE_URL}/menu`)
  const response = await axios.get(`${API_BASE_URL}/menu`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch menu");
  }

  return response.data.data;
};

export const createReservation = async (reservationData, csrfToken) => {
  const response = await axios.post(
    `${API_BASE_URL}/reservations`,
    { ...reservationData },
    {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchCsrfToken = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/get_csrf`, {
    withCredentials: true,
  });
  return data.csrf_token;
};

export const subscribeToNewsletter = async (email,csrfToken) => {

  const response = await axios.post(
    `${API_BASE_URL}/newsletter`,
    { email },
    {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      withCredentials: true,
    }
  );
  return response.data;
};
