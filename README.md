# Full-Stack Todo App

A full-stack todo app build conducted by [Kaiz](https://github.com/kaiz16).

The purpose of this project is to learn how to build a Express.js server to
handle request from the frontend.

## Tech Stack

1. Vue 3 - Frontend
2. Express.js - Backend
3. Vite - Build Tool

## Get started

1. Clone this repository.

```sh
git clone https://github.com/yapyeeqiang/full-stack-todo-app.git
```

2. Install `client` dependencies.

```sh
cd client
npm install
```

3. Install `server` dependencies.

```sh
cd server
npm install
```

4. Create a `.env` to store your API endpoint.

```sh
touch .env
echo "VITE_SERVER_URL=http://localhost:4000" > .env
```

5. Run the frontend.

```sh
npm run dev
```

6. Run the server.

```sh
nodemon index.js

# or
node index.js
```

7. If you don't have `nodemon`, you can try this:

```sh
npm install -g nodemon
```
