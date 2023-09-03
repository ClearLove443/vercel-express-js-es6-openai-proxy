const fetchUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }])
    }, 1000);
  })
}

const fetchUser1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }])
    }, 1000);
  })
}

async function fetchUser2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }])
    }, 1000);
  })
}

const fetchUser3 = async () => {
  return [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
}

const fetchUser4 = () => {
  return [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
}

export { fetchUser, fetchUser1, fetchUser2, fetchUser3, fetchUser4 };
