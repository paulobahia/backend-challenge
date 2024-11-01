import axios from "axios";
import dotnev from 'dotenv'

dotnev.config()

export const server = axios.create({
  baseURL: process.env.API_MOCK_URL,
  timeout: 5000
})