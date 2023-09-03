import express from 'express';
import path from 'path';
const app = express();

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

import { fetchUser, fetchUser1, fetchUser2, fetchUser3, fetchUser4 } from './fun.js';

app.get('/fetchUser', async (req, res) => {
  const user = await fetchUser()
  res.json(user)
})

app.get('/fetchUser1', async (req, res) => {
  const user = await fetchUser1()
  res.json(user)
})

app.get('/fetchUser2', async (req, res) => {
  const user = await fetchUser2()
  res.json(user)
})

app.get('/fetchUser3', async (req, res) => {
  const user = await fetchUser3()
  res.json(user)
})

app.get('/fetchUser3-2', (req, res) => {
  const user = fetchUser3()
  // user.then(r => {
  //   // res.send(r)
  //   res.json(r)
  // })

  user.then(r => res.json(r))
})

app.get('/fetchUser4', (req, res) => {
  const user = fetchUser4()
  res.json(user)
})

import { _call } from './llm.js';

app.post('/chat', async (req, res) => {
  let data = req.body;
  const r = await _call(data.q)
  console.log(r.text)
  res.send(r.text)
})

import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage })

import { parse } from './pdf-parse.js';
app.post('/contextualValidation', upload.single('pdf'), async (req, res) => {

  const file = req.file
  const path = file.path
  const pdfContext = await parse(path)

  let verifiedData = req.body.verifiedData;

  // const r = await _call(data.q)
  // console.log(r.text)
  const prompt =
    `
    I want you to act as document verifier. I will provide you with a text information and a JSON information. Your task is to compare and validate the data in the JSON with the data in the text, paying special attention to the fields present in the JSON file. Please report the matching information you found in the text and the original data of the JSON file, and the results are displayed in JSON format.  If u can't find in text, u can return null about pdf about the field. 直接返回json结果，不要其他回答。

    Return the json result directly, don't answer too much.

    Here is a sample result:
    {"field":{"json":"test001","pdf":"test002"}}

    Here is the JSON and text:

    JSON:
    ${verifiedData}

    text:
    ${pdfContext}
  `
  const r = await _call(prompt)
  // console.log(r.text)

  const reg1 = /(?<=```json)[\s\S]*/
  const reg2 = /[\s\S]*(?=```)/
  if (!reg2.test(r.text)) {
    res.send(r.text)
  } else {
    const re = r.text.match(reg2)[0].match(reg1)[0]
    res.send(re)
  }
})

import { PORT } from './config.js';

const port = PORT || 3000

app.listen(port || 3000);
console.log(`应用启动成功 端口:${port}`);