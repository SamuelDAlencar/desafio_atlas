# [🇧🇷 Português]

# 🔍 github_user_clone

Aplicação front-end que permite buscar um usuário real do github e listar seus repositórios

## 🧰 Construído com:

- [Javascript](https://www.javascript.com/) - Linguagem utilizada para desenvolvimento
- [React](https://www.npmjs.com/package/react) (base da aplicação criada via `npx create-react-app`)
  - [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Gerenciamento de rotas da aplicação
  - [React-Toastify](https://www.npmjs.com/package/react-toastify) - Disparo de erros e notificações
- [Axios](https://www.npmjs.com/package/axios) - Biblioteca para efetuar requisições
- [Eslint](https://www.npmjs.com/package/eslint) - Ferramenta utilizada para manter um padrão de código uniforme

## ✅ Status

***Front-end:***

  - [x] Página de busca com um campo de pesquisa que redireciona caso encontrado um usuário válido
  - [x] Aviso caso não encontre um usuário
  - [x] Página de usuário contendo informações do mesmo
  - [x] Página de usuário contendo todos os seus repositórios públicos
  - [x] Semelhança da aplicação com a página oficial do Github
  - [x] Testes da página de busca 
  - [x] Testes da página de usuário

## 👷‍♂️ Testes

Neste projeto foram feitos testes unitários, para testar a aplicação, rode o comando `npm test`

## 👨‍💻 Acesse o projeto

**Acesse a aplicação no browser: https://atlas-test-front.herokuapp.com/**

## 💻 Pré-requisitos

Antes de instalar a aplicação, caso opte por rodar a aplicação via [Docker](https://www.docker.com/) verifique se você possui:

  - Versão *igual* ou *superior* a `1.13.1` do `Docker`
  - Porta `3000` da sua máquina liberadas
  
Sem Docker:

  - Versão *igual* ou *superior* a `16` do `node`
  - Porta `3000` da sua máquina liberadas

## 🚀 Instalando localmente

Siga esses os comandos em ordem *de acordo com o método que escolher*

Via Docker:

  - Clone o projeto: `git clone git@github.com:SamuelDAlencar/github_user_clone.git`
  - Dentro da raiz: `docker-compose up -d`
    > Caso queira rodar os containers acoplado ao terminal para acompanhar o status deles, rode somente `docker-compose up`
  - Caso não ocorra nenhum erro, acesse a página e faça login: `http://localhost:3000/login`

Sem Docker:

  - Clone o projeto: `git clone git@github.com:SamuelDAlencar/github_user_clone.git`
  - Dentro da raiz: `npm install`
  - Ainda na raiz: `npm start`
  - Caso não ocorra nenhum erro e a aplicação ainda não tenha aberto no browser, acesse: `http://localhost:3000`

> Caso dê algum erro após rodar `npm start` ou ao final do `docker-compose up`, confira se não há nenhuma aplicação rodando na porta `3000` 

## 👩‍💻 Utilizando a aplicação

Na tela incial, basta digitar o username do usuário que você deseja listar os repositórios, e então será redirecionado a pagina em que serão listados os repositórios publicos do usuário pesquisado

<hr />

# [🇺🇸 English]

# 🔍 github_user_clone

Front-end application that lets you search for a real github user and list their repositories

## 🧰 Built with:

- Javascript - Language used for development
- HTML - Markup language
- CSS - Markup language
- [React](https://www.npmjs.com/package/react) (application base created via `npx create-react-app`)
  - [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Application route management
  - [React-Toastify](https://www.npmjs.com/package/react-toastify) - Triggering errors and notifications
- [Axios](https://www.npmjs.com/package/axios) - Request fulfillment library
- [Eslint](https://www.npmjs.com/package/eslint) - Tool used to maintain a uniform code standard

✅ Status

***Front-end:***

[x] Search page with an input field that redirects if a valid user is found
[x] Warning if no user is found
[x] User page containing the user information
[x] User page containing all of it's public repositories
[x] Application similarity with the official Github page
[x] Search page tests 
[x] User page tests

## 👷♂️ Testing

This project has a **unit tests** coverage, to test the application, run the `npm test` command

## 👨💻 Access the project

**Access the application in the browser: https://atlas-test-front.herokuapp.com/**

## 💻 Prerequisites

Before installing the application, if you choose to run the application via [Docker](https://www.docker.com/) check that you have:

  - Version *equal* or *superior* to `1.13.1` of `Docker`
  - Port `3000` on your machine cleared
  
No Docker:

  - Version *equal* or *superior* to `16` of `node`
  - Release `3000` port of your host

## 🚀 Installing locally

Follow these commands in order *according to the method you choose*

Via Docker:

  - Clone the project: `git clone git@github.com:SamuelDAlencar/github_user_clone.git`
  - Inside the root: `docker-compose up -d`
    > If you want to run the containers docked to the terminal to keep track of their status, just run `docker-compose up`.
  - If there are no errors, go to the page and login: `http://localhost:3000/login`

No Docker:

  - Clone the project: `git clone git@github.com:SamuelDAlencar/github_user_clone.git`
  - In the root: `npm install`
  - Still in root: `npm start`
  - If there is no error and the application has not yet opened in the browser, go to: `http://localhost:3000`

> If you get an error after running `npm start` or at the end of `docker-compose up`, make sure there is no application running on port `3000`. 

## 👩💻 Using the application

On the initial screen, just enter the username of the user you want to list the repositories, and then you will be redirected to the page where the public repositories of the searched user will be listed
