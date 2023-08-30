## Structure to get start any react project with Vite

That's a boilerplate to organize the whole project which you would like to work for

## Commands:

```bash
$ npm i eslint @babel/eslint-parser prettier eslint-config-prettier eslint-plugi
n-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-storybook
 -D
```
```bash
$ npm i jest @types/jest @babel/core @babel/eslint-parser @babel/preset-env @babel/preset-react babel-jest babel-loader jest-styled-components jest-environment-jsdom @testing-library/react @testing-library/jest-dom -D
```
```bash
$ npm i styled-components && npm i -D @types/styled-components
```
```bash
$ npm eslint ./ --ext "js,jsx" --fix
```
```bash
$ npm i prop-types
```
```bash
$ npm i jest-environment-jsdom --save-dev
```
```bash
$ npx sb init
```

Then to see the storybook: 
```bash
$ npm run storybook
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
