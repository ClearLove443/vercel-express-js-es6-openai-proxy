import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import { API_REVERSE_PROXY_URL, OPENAI_ACCESS_TOKEN } from "./config.js"

const api = new ChatGPTUnofficialProxyAPI({
  accessToken: OPENAI_ACCESS_TOKEN,
  debug: true,
  apiReverseProxyUrl: API_REVERSE_PROXY_URL
})

async function _call(prompt) {
  const res = api.sendMessage(prompt)
  return res
}

export { _call }
