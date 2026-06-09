# 🖥️ Portfólio - Front-end (Next.js)

Este é o ecossistema de front-end do meu portfólio. Uma aplicação web moderna, performática e focada na experiência do usuário (UX), construída com Next.js e TypeScript.

## 🛠️ Tecnologias e Ecossistema

* **Next.js** — Framework React com renderização híbrida (SSR/SSG) e roteamento baseado em App Router.
* **TypeScript** — Tipagem estática para evitar erros em tempo de execução.
* **Tailwind CSS** — Framework utilitário para estilização responsiva e ágil.

## 📦 Bibliotecas de Efeitos e Interface

### ⌨️ Type Writer Effect
Efeito de digitação fluida na seção Hero.
```bash
npm install typewriter-effect
```

### 🎨 Lucide React
Pacote de ícones limpos e consistentes.
```bash
npm i lucide-react
```

### 🎬 Motion
Animações de transição e scroll da página.
```bash
npm install framer-motion
```

## ⚙️ Variáveis de Ambiente (`.env.local`)
Crie um arquivo `.env.local` na raiz desta pasta com as seguintes chaves:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_CLOUDINARY_URL=sua_url_do_cloudinary
```

## 🚀 Scripts Disponíveis
* `npm run dev` — Inicia o servidor de desenvolvimento.
* `npm run build` — Cria a versão de produção otimizada.
* `npm start` — Inicia o servidor Next.js em produção.
