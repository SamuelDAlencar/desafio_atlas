# 🔍 github_user_clone

# [🇧🇷 Português]

Teste front-end end da [AtlasGR](https://www.atlasgr.com.br/) que consiste em uma aplicação que permite buscar um usuário real do github e listar seus repositórios

## 🚀 Começando

**Caso queira acessar a aplicação somente no browser: https://atlas-test-front.herokuapp.com/**

Rodar o projeto no localhost **sem Docker**

```
// Clona o projeto em sua máquina
git clone git@github.com:SamuelDAlencar/desafio_atlas.git

// Instala as dependências
npm install

// Inicia a aplicação na porta 3000 (http://localhost:3000/)
npm start
```

Rodar o projeto no localhost **utilizando Docker**

```
// Clona o projeto em sua máquina
git clone git@github.com:SamuelDAlencar/desafio_atlas.git

// Levanta o container já inicializando a aplicação na mesma porta 3000
docker-compose up

// Caso queira rodar o container desacoplado
docker-compose up -d
```

> Caso dê algum erro após rodar `npm start` ou ao final do `docker-compose up`, confira se não há nenhuma aplicação rodando na porta `3000` 

- **Comportamento da página:** na tela incial, basta digitar o username do usuário que você deseja listar os repositórios, e então será redirecionado a pagina em que serão listados os repositórios publicos do usuário pesquisado

## 🧰 Construído com

- Javascript - Linguagem utilizada para desenvolvimento
- HTML - Linguagem de marcação
- CSS - Linguagem de marcação
- [React](https://www.npmjs.com/package/react) (base da aplicação criada via `npx create-react-app`)
  - [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Gerenciamento de rotas da aplicação
  - [React-Toastify](https://www.npmjs.com/package/react-toastify) - Disparo de erros e notificações
- [Axios](https://www.npmjs.com/package/axios) - Biblioteca para efetuar requisições
- [Eslint](https://www.npmjs.com/package/eslint) - Linter para manter um padrão de desenvolvimento limpo

## 📦 Desenvolvimento

- A aplicação foi feita com a intenção de ser um clone fiel do Github Darkmode
- Notificações de erro e avisos fazem parte da biblioteca [React-Toastify](https://www.npmjs.com/package/react-toastify)
- Projeto desenvolvido com o padrão de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Branches nomeadas em inglês, mas commits feitos em Português
- Todos os SVGs utilizados foram retirados diretamente da página oficial do [Github](https://github.com/)
- Gerenciamento de estado da aplicação feito utilizando ContextAPI

## 🛠 Testes

Aplicação testada via testes unitários. Comando de testes: `npm test`

# [🇺🇸 English]

Front end challenge of [AtlasGR](https://www.atlasgr.com.br/) which consists of an application that allows you to search for a real github user and list their repositories

## 🚀 Getting Started

**If you want to access the application only in the browser: https://atlas-test-front.herokuapp.com/**

Running the project on localhost **without Docker**

```
// Clone the project on your machine
git clone git@github.com:SamuelDAlencar/desafio_atlas.git

// Install the dependencies
npm install

// Start the application on port 3000 (http://localhost:3000/)
npm start
```

Run the project on localhost **using Docker**

```
// Clone the project on your machine
git clone git@github.com:SamuelDAlencar/desafio_atlas.git

// Raise the container already initializing the application on the same port 3000
docker-compose up

// If you want to run the container decoupled
docker-compose up -d
```

> If you get an error after running `npm start` or at the end of `docker-compose up`, make sure there is no application running on port `3000`. 

- Page behavior:** in the initial screen, just type the username of the user you want to list the repositories, and then you will be redirected to the page where the public repositories of the searched user will be listed

## 🧰 Built with

- Javascript - Language used for development
- HTML - Markup language
- CSS - Markup language
- [React](https://www.npmjs.com/package/react) (application base created via `npx create-react-app`)
  - [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Application route management
  - [React-Toastify](https://www.npmjs.com/package/react-toastify) - Triggering errors and notifications
- [Axios](https://www.npmjs.com/package/axios) - Request fulfillment library
- [Eslint](https://www.npmjs.com/package/eslint) - Linter for maintaining a clean development pattern

## 📦 Development

- The application was made with the intention of being a faithful clone of the Darkmode Github
- Error notifications and warnings are part of the [React-Toastify] library (https://www.npmjs.com/package/react-toastify)
- Project developed with the [Conventional Commits] pattern (https://www.conventionalcommits.org/en/v1.0.0/)
- Branches named in English, but commits done in Portuguese
- All SVGs used were taken directly from the official [Github](https://github.com/) page
- Application state management using ContextAPI

## 🛠 Testing

Application tested via unit tests. Test command: `npm test`.
