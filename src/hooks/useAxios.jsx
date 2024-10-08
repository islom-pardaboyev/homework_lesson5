import axios from "axios";
import { API_KEY } from "./useEnv";

export const useAxios = () => axios.create({baseURL: API_KEY})