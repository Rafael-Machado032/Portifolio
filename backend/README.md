## 📦 Integração com APIs e Dependências

### ☁️ Cloudinary (Gerenciamento de Mídias)
Utilizado para realizar o upload e a conversão de arquivos (como PDFs e URLs) em imagens para exibição dinâmica nos cards do portfólio.
> *Nota técnica:* Foi utilizado o SDK nativo de PHP do Cloudinary, pois os pacotes específicos de integração com Laravel ainda não possuíam compatibilidade total com a versão mais recente do framework utilizada neste projeto.

**Instalação:**
```bash
composer require cloudinary/cloudinary_php
```

**Configuração do Ambiente (`.env`):**
```ini
CLOUDINARY_URL=cloudinary://sua_key:seu_secret@seu_cloud_name
```

**Exemplo de Upload e Conversão:**
```php
use Cloudinary\Api\Upload\UploadApi;

// Realiza o upload do PDF e retorna a URL da imagem gerada
\(upload = (new UploadApi())->upload(storage_path('app/public/' .\)pathPDF), [
    'resource_type' => 'auto'
]);
```

---

## 🔒 Configuração de Ambiente Local (Windows & SSL)

Por padrão, o ambiente PHP no Windows pode apresentar falhas de comunicação ao fazer requisições HTTPS externas (como para a API do Cloudinary) devido à ausência de certificados SSL locais. Para corrigir o erro de cURL/SSL, siga os passos abaixo:

1. Baixe o arquivo de autoridade de certificação atualizado (`cacert.pem`) diretamente de: [curl.se/ca/cacert.pem](https://curl.se).
2. Mova o arquivo baixado para o diretório do seu PHP, por exemplo: `C:\php\extras\ssl\cacert.pem`.
3. Abra o seu arquivo de configuração `php.ini`, localize as linhas abaixo, remova o ponto e vírgula (`;`) do início delas para desativar o comentário e aponte para o caminho correto:

```ini
curl.cainfo = "C:\php\extras\ssl\cacert.pem"
openssl.cafile = "C:\php\extras\ssl\cacert.pem"
```
4. Reinicie o seu servidor local (`php artisan serve`) para aplicar as alterações.
