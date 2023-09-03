# vercel-express-js-es6-openai-proxy

## how to get accessToken

[获取 accessToken](https://chat.openai.com/api/auth/session)

## build

```sh
npm i
```

## start

```sh
npm run start
```

## async and sync fun

### async fun

- fetchUser
- fetchUser4
- fetchUser2
- fetchUser3

### sync fun

- fetchUser4

## vercel deploy

```sh
vercel --prod
```

## async/await, await为什么有的时候是可以省略的？

<https://segmentfault.com/q/1010000014959532>

首先，awati后面应该跟Promise实例。
其次，async函数返回的是Promise实例。
