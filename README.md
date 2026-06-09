# 🚀 Meu Portfólio

> Desenvolvido com Next.js, React e Tailwind CSS para centralizar minhas criações e evolução técnica. Totalmente responsivo, otimizado para performance e integrado aos meus repositórios de código. Através dele, você tem acesso direto aos meus projetos em Laravel, Next.js e ao meu GitHub.

---

## 📷 Demonstração

![Screenshot do Projeto](./Captura%20de%20tela.png)
*Link do projeto:* [Visite o site](https://rafaelmachadodev.vercel.app)

---

## 🛠️ Tecnologias Utilizadas

### Front-end
* **Next.js** — Framework React focado em produção e SSR.
* **TypeScript** — Tipagem estática para maior segurança e escalabilidade.
* **Tailwind CSS** — Estilização rápida e responsiva baseada em classes utilitárias.

### Back-end & Banco de Dados
* **Laravel** — Framework PHP robusto para construção da API e lógica de negócios.
* **PostgreSQL** — Banco de dados relacional utilizado para persistência dos dados.

---

## ✨ Funcionalidades Principais

* 🔐 Autenticação segura de usuários no painel administrativo.
* 📱 Design totalmente responsivo adaptado para dispositivos móveis (Mobile-First).
* 🔄 Consumo de API RESTful em tempo real para gerenciamento de conteúdo.
* ⚙️ Painel dinâmico para alteração de layouts, depoimentos e dados do perfil.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Você precisará ter instalado em sua máquina: **Git**, **Node.js**, **PHP** e **Composer**.

### 1. Clonar o repositório
```bash
git clone https://github.com/Rafael-Machado032/Portifolio.git
```

### 2. Configurar o Back-end (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### 3. Configurar o Front-end (Next.js)
Abra um novo terminal na raiz do projeto:
```bash
cd frontend
npm install
npm run dev
```

---

## 📦 Bibliotecas de Efeitos e Estilização

### ⌨️ Type Writer Effect
Efeito de digitação fluida na tela.
```bash
npm install typewriter-effect
```
*Exemplo de uso:*
```tsx
import Typewriter from 'typewriter-effect';
```

### 🎨 Lucide React
Biblioteca moderna de ícones vetoriais.
```bash
npm i lucide-react
```
*Exemplo de uso:*
```tsx
import { Nome_Do_Icone } from 'lucide-react';
```

### 🎬 Motion
Animações fluidas e efeitos de surgimento ao rolar a página (Scroll Animation).
```bash
npm install framer-motion
```
*Exemplo de uso:*
```tsx
import { motion } from "framer-motion";
```

---

## 🧑‍💻 Autor

* **Rafael Machado** - [LinkedIn](https://www.linkedin.com/in/rafaelmachadodev/) - [E-mail](mailto:rafael_machado032@yahoo.com.br)
