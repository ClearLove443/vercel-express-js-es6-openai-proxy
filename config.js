import dotenv from "dotenv";

dotenv.config();

const { PORT, OPENAI_ACCESS_TOKEN, API_REVERSE_PROXY_URL } = process.env

export { API_REVERSE_PROXY_URL, OPENAI_ACCESS_TOKEN, PORT };
