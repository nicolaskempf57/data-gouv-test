# Front-end test

This project is a SPA made with Vue3 for an interview process.
In a production project, you want to add :
- tests for error cases
- Vuelidate or another library to enhance form validation
- Vue component for every component of the Design system
- password verification during registration (size, complexity, checked against a blacklist)
- modify back-end to return registration date as timestamp

## Setup

Install dependencies :
```sh
npm install
```

Run tests :
```sh
npm test
```

Run project :
```sh
npm run dev
```

## Configuration

This project require a configuration not shared on Github.
An example of each constant is available in `src/config.example.js`.
this file must be copied to `src/config.js`.

```sh
cp src/config.example.js src/config.js
```