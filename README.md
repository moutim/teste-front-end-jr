# 🛒 Projeto de E-commerce

---

### 📖 Visão Geral do Projeto

Este projeto é uma página de e-commerce desenvolvida em **React** e **TypeScript**, destinada a exibir uma vitrine de produtos. Os dados dos produtos são consumidos de um endpoint, e ao clicar em um produto, um modal é aberto exibindo as informações detalhadas do produto.

[Deploy no Vercel](https://teste-front-end-jr-moutims-projects.vercel.app/)
![image](https://github.com/moutim/teste-front-end-jr/assets/88093439/4a4e0643-ebca-4051-bde1-4d26922dce9f)

---

### 🛠 Tecnologias Usadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipos estáticos.
- **SCSS**: Utilizado para facilitar a manutenção e a escalabilidade dos estilos.
- **HTML5**: Estrutura básica do projeto.

---

### 📁 Estrutura de Pastas

```
projeto-ecommerce/
│
├── public/
│   ├── index.html          # Arquivo principal HTML
│   └── ...                 # Outros arquivos estáticos
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── Banner.tsx  # Componente para exibir o banner
│   │   │   └── Banner.scss # Estilos do componente Banner
│   │   ├── Modal/
│   │   │   ├── Modal.tsx   # Componente para exibir o modal com detalhes do produto
│   │   │   └── Modal.scss  # Estilos do componente Modal
│   │   └── ...             # Outros componentes
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx    # Página principal
│   │   │   └── Home.scss   # Estilos da página Home
│   │   └── ...             # Outras páginas
│   │   ├── variables.scss  # Arquivo de variáveis SCSS
│   │   └── app.scss        # Arquivo SCSS principal
│   ├── App.tsx             # Componente principal da aplicação com as rotas
│   ├── index.tsx           # Ponto de entrada da aplicação React
│   └── ...                 # Outros arquivos e pastas de código-fonte
├── package.json            # Arquivo de configuração do npm
└── README.md               # Documentação do projeto
```

---

### ✅ Boas Práticas

- **SEO**: Utilizei tags meta e o atributo alt para acessibilidade.
- **HTML Semântico**: Usei tags HTML5 semânticas como `<header>`, `<main>`, `<section>`, `<footer>` e `<figure>`.
- **Responsividade**: Apliquei o design responsivo com media queries.

---

### 🚀 Como Rodar

1. **Clone o Repositório:**

   ```sh
   git clone https://github.com/moutim/teste-front-end-jr.git
   cd teste-front-end-jr
   ```

2. **Instale as Dependências:**

   ```sh
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento:**

   ```sh
   npm run dev
   ```

4. **Abra o Navegador:**

   O projeto estará rodando em `http://localhost:5173`.

---
