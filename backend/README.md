# 🚀 Meu Portifolio

> Desenvolvido com Next.js, React e Tailwind CSS para centralizar minhas criações e evolução técnica. Totalmente responsivo, otimizado para performance e integrado aos meus repositórios de código. Através dele, você tem acesso direto aos meus projetos em Laravel, Next.js e ao meu GitHub

---

## 📷 Demonstração

![Screenshot do Projeto](../frontend/public/Captura%20de%20tela.png)
*Link do projeto:* [Visite o site](https://rafaelmachadodev.vercel.app)

---

## 🛠️ Tecnologias Utilizadas

### Back-end & Banco de Dados
* **Laravel** — Framework PHP robusto para a API e lógica de negócios.
* **PostgreSQL** — Banco de dados utilizado PostgreSQL para persistência de dados.

---

## ✨ Funcionalidades Principais

* 🔐 Autenticação segura de usuários.
* 🔄 Consumo de API RESTful em tempo real.
* 🏛️ Crud para manipulação de dados com o banco.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Você precisará ter instalado: Git, Node.js, PHP e Composer.

### 1. Clonar o repositório
```bash
git clone https://github.com/Rafael-Machado032/Back-End-Estudos.git
cd Portifolio
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

## Instalação das API

*Cloudinary*
Transforma pdf e url em imagem para exibição dos cards
Cloudinary PHP SDK é api que faz conversão do pdf e url em imagem
```bash
    composer require cloudinary/cloudinary_php
```
Não foi instalado para laravel pois por enquato não é compativel com a versão novo
No arquivo .env 
```ini
    CLOUDINARY_URL=cloudinary://sua_key:seu_secret@seu_cloud_name
```
Esse comando retorna a imagem do pdf
```php
    use Cloudinary\Api\Upload\UploadApi;

    $upload = (new UploadApi())->upload(storage_path('app/public/' . $pathPDF), [
        'resource_type' => 'auto'
    ]);
```

## Certificado SSL

Por padrão o windons não conversa com os certificados PHP foi baixado o arquivo no link
```http
curl.se/ca/cacert.pem
```
e inserido no caminho C:\php\extras\ssl\cacert.pem
No PHP.ini foi modificado onde retira o ";" e insere o caminho do certificado

curl.cainfo = "C:\php\extras\ssl\cacert.pem"

Faca o mesmo no

openssl.cafile = "C:\php\extras\ssl\cacert.pem"

---

## 🧑‍💻 Autor

* **Rafael Machado** - [LinkedIn](https://www.linkedin.com/in/rafaelmachadodev/) - [E-mail](mailto:rafael_machado032@yahoo.com.br)



