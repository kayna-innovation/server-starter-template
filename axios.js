const axios = require("axios");

const axiosClient = axios.create({
  baseURL: process.env.KAYNA_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosClient;
