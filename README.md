
# Calculadora de Juros Compostos

Este é um projeto Node.js simples para calcular juros compostos, utilizando Express no back-end e Tailwind CSS no front-end.

## Requisitos

- **Node.js** (você pode instalar no site oficial: https://nodejs.org)
- **NPM** (geralmente já vem com o Node.js)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/usuario/repositorio.git
   ```

2. **Entre no diretório do projeto:**

   ```bash
   cd nome-do-projeto
   ```

3. **Instale as dependências:**

   Rode o seguinte comando para instalar as dependências necessárias (Express, Tailwind CSS, PostCSS):

   ```bash
   npm install
   ```

4. **Compile o CSS do Tailwind:**

   Para compilar o CSS usando o PostCSS e Tailwind, execute:

   ```bash
   npm run build:css
   ```

   Isso vai gerar o arquivo `public/style.css`.

## Rodar o projeto

1. Após instalar as dependências e compilar o CSS, você pode rodar o servidor com o comando:

   ```bash
   npm start
   ```

2. Acesse a aplicação no navegador:

   Abra o navegador e vá para:

   ```
   http://localhost:3000
   ```

## Estrutura do projeto

```text
/public
  ├── index.html       # Página principal
  ├── style.css        # Arquivo CSS gerado
  └── app.js           # Arquivo que configura o servidor Express
/src
  └── style.css        # Arquivo CSS com diretivas Tailwind (usado na compilação)
/node_modules          # Pacotes instalados via npm
```

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Tailwind CSS**
- **PostCSS**
  
## Como usar em outro computador

Se precisar utilizar o projeto em outro computador:

1. Clone o repositório e siga os passos de instalação acima.
2. Certifique-se de rodar `npm install` para instalar todas as dependências.
3. Rode `npm run build:css` para compilar o CSS com o Tailwind.
4. Execute `npm start` para iniciar o servidor.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE`
