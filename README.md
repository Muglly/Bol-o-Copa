# Bolao-Copa
 
 Projeto desenvolvida durante o evento NLW IGNITE Copa da Rocketseat.

Dentro dessa aplicação é possível:

- Logar com o Google (exclusivo da versão Mobile).
- Criar bolão.
- Ver bolões criados e buscar bolões
- Compartilhar o código dos bolões com amigos.
- Criar palpites de dos placares dos jogos

<h2 style="font-weight:bold"> BACKEND (SERVER) </h2>

Aplicação backend do projeto construído usando Node, Fastify, Prisma, SQLite.

<div style="display: inline_block"><br>
  <img align="center" alt="Rafa-NodeJs" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Rafa-Ts" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
  <img align="center" alt="Rafa-prisma" width="80" src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/prisma-2.svg">
  <img align="center" alt="Rafa-sqlite" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg">
  <img align="center" alt="Rafa-fastify" width="80" src="https://www.fastify.io/images/fastify-logo-inverted.2180cc6b1919d47a.png">
</div>

## RODAR APLICAÇÃO BACKEND

Abra terminal de comando dentro da pasta.

- Instale as dependências

```bash
  npm install
```

- Inicie o servidor

```bash
  npm run dev
```

<hr>

<h2 style="font-weight:bold"> FRONT-END (WEB) </h2>

Aplicação frontend do projeto construído utilizando React, Next.js, Typescript, TaildwindCSS.

<div style="display: inline_block"><br>
  <img align="center" alt="Rafa-react" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
  <img align="center" alt="Rafa-nextjs" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg">
  <img align="center" alt="Rafa-Ts" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
  <img align="center" alt="Rafa-tailwindcss" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg">
</div>
<br/>

![Web](https://raw.githubusercontent.com/Muglly/Bolao-Copa/master/mobile/assets/PreviewReact.png)

## RODAR APLICAÇÃO FRONTEND

Após iniciar o backend/servidor, abra o terminal de comando dentro da pasta web e execute os seguintes comandos.

- Instale as dependências

```bash
  npm install
```

- Iniciar aplicação

```bash
  npm run dev
```

A página abrirá no endereço:

> http://localhost:3000
Dados em tela refletem os dados do banco de Dados, conforme os bolões forem sendo criados o número na tela será atualizado.

<hr>

<h2 style="font-weight:bold">MOBILE</h2>

Aplicação mobile do projeto construído utilizando React Native, Expo, Native-base.

<div style="display: inline_block"><br>
  <img align="center" alt="Rafa-react" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
  <img align="center" alt="Rafa-Ts" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
  <img align="center" alt="Rafa-expo" width="40" src="https://mobiletech360.co/Apps/wp-content/uploads/2021/08/Expo-APK-v2.21.5-Download-150x150.png">
</div>
<br/>

<div style="display:flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  <img src="https://github.com/Muglly/Bolao-Copa/blob/master/mobile/assets/Tela%20de%20carregamento.jpg?raw=true" width="180px" height="360px"/>
  <img src="https://github.com/Muglly/Bolao-Copa/blob/master/mobile/assets/tela%20de%20login.jpg?raw=true" width="180px" height="360px"/>
  <img src="https://github.com/Muglly/Bolao-Copa/blob/master/mobile/assets/Criar%20bolao.jpg?raw=true" width="180px" height="360px"/>
</div>

<div style="display:flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  <img src="https://github.com/Muglly/Bolao-Copa/blob/master/mobile/assets/Boloes.jpg?raw=true" width="180px" height="360px"/>
  <img src="https://github.com/Muglly/Bolao-Copa/blob/master/mobile/assets/Palpites.jpg?raw=true" height="360px"/>
  <img src="https://github.com/Muglly/Bolao-Copa/blob/master/mobile/assets/Vusca%20de%20bol%C3%A3o.jpg?raw=true" width="180px" height="360px"/>
</div>
<br>

## RODAR APLICAÇÃO MOBILE

Após iniciar o backend/servidor, abra o terminal de comando na pasta mobile.

Você deve ter android studio para poder emular um ambiente android ou instalar EXPO
GO da Googleplay store ou Applestore.

- Instale as dependências

```bash
  npm install
```

- Inicie a aplicação

```bash
  npx expo start
```

Após a aplicação ser iniciada você tem a opção de ou abrir pelo emulador do Android studio ou lendo o QR Code através do Expo GO.

> Obs: Para a aplicação é necessário que você tenha uma variavel de ambiente. CLIENT_ID
<hr>
