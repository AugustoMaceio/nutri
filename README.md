O **Service Worker** é um script JavaScript que roda em segundo plano no navegador e permite que sua aplicação funcione offline, armazene arquivos em cache e até envie notificações.

Para sua aplicação nutricional, o fluxo básico é:

## 1. Estrutura de arquivos

```text
nutri-app/
│
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
│
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## 2. Registrar o Service Worker

No final do `script.js`:

```javascript
if ('serviceWorker' in navigator) {

    window.addEventListener('load', async () => {

        try {

            const registration =
                await navigator.serviceWorker.register(
                    './service-worker.js'
                );

            console.log(
                'Service Worker registrado:',
                registration
            );

        } catch (error) {

            console.error(
                'Erro ao registrar SW:',
                error
            );

        }

    });

}
```

---

## 3. Criar o Service Worker

Arquivo `service-worker.js`:

```javascript
const CACHE_NAME = "nutri-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];
```

### Evento de instalação

Executado uma única vez.

```javascript
self.addEventListener("install", event => {

    console.log("Instalando Service Worker");

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(FILES_TO_CACHE);
            })

    );

});
```

---

## 4. Interceptar requisições

Sempre que a página solicitar um arquivo:

```javascript
self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                if (response) {
                    return response;
                }

                return fetch(event.request);

            })

    );

});
```

Fluxo:

```text
Usuário abre app
        ↓
Service Worker intercepta
        ↓
Arquivo existe no cache?
        ↓
   Sim → retorna cache
        ↓
   Não → busca internet
```

---

## 5. Atualizar cache

Quando você alterar a aplicação:

```javascript
const CACHE_NAME = "nutri-v2";
```

Ao mudar a versão, o navegador instalará um novo cache.

Remova caches antigos:

```javascript
self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if(key !== CACHE_NAME){

                            return caches.delete(key);

                        }

                    })

                );

            })

    );

});
```

---

## 6. Testando localmente

⚠️ Service Workers não funcionam abrindo o HTML diretamente:

```text
file:///C:/nutri/index.html
```

Isso NÃO funciona.

Você precisa de um servidor HTTP.

### Opção 1 — VS Code

Instale a extensão:

```text
Live Server
```

Clique com botão direito:

```text
Open With Live Server
```

A aplicação abrirá em:

```text
http://127.0.0.1:5500
```

---

### Opção 2 — Node.js

```bash
npx serve
```

ou

```bash
npx http-server
```

---

## 7. Verificar se está funcionando

No Chrome:

```text
F12
→ Application
→ Service Workers
```

Você verá algo semelhante:

```text
✓ Service Worker registered

Source:
service-worker.js

Status:
Activated and running
```

---

## 8. Testar offline

Após carregar a aplicação:

```text
F12
→ Network
→ Offline
```

Atualize a página.

Se tudo estiver correto, a aplicação continuará funcionando sem internet.

---

## 9. Tornar instalável (PWA)

No `index.html`:

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#2e7d32">
```

No `manifest.json`:

```json
{
  "name": "Plano Nutricional",
  "short_name": "Nutri",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2e7d32",
  "background_color": "#ffffff"
}
```

Depois disso, Chrome e Edge mostrarão:

```text
Instalar aplicativo
```

e o sistema permitirá instalar a aplicação como se fosse um app nativo Android ou Windows.

---

## 10. Cache dinâmico (recomendado)

Para sua aplicação nutricional, você pode salvar automaticamente imagens, ícones e novos recursos:

```javascript
self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request)
                    .then(networkResponse => {

                        return caches.open(CACHE_NAME)
                            .then(cache => {

                                cache.put(
                                    event.request,
                                    networkResponse.clone()
                                );

                                return networkResponse;

                            });

                    });

            })

    );

});
```

Esse modelo é mais robusto porque novos arquivos acessados pelo usuário passam a ficar disponíveis offline automaticamente.

---

**Instruções de instalação e execução (rápido)**

Requisitos:

- Node.js (opcional, apenas para usar `npx` localmente)
- Ou a extensão Live Server no VS Code

Opções para rodar a aplicação localmente:

- Usando Live Server (VS Code):

    1. Instale a extensão `Live Server` no VS Code.
    2. Clique com botão direito em `index.html` → "Open with Live Server".
    3. Acesse o endereço mostrado (ex.: `http://127.0.0.1:5500`).

- Usando `npx http-server` (sem extensão):

```bash
npx http-server . -p 5500
# ou
npx serve -l 5500
```

Depois, abra: `http://127.0.0.1:5500` no navegador.

Limpando/registrando o Service Worker (útil se você alterou o SW):

1. Abra DevTools → Application → Service Workers → clique em "Unregister" para o SW ativo.
2. Ou cole no Console do DevTools:

```javascript
navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
```

Testando offline:

1. Carregue a página com o SW registrado.
2. F12 → Network → selecione "Offline".
3. Atualize a página: os arquivos em cache devem ser servidos.

Verificações rápidas caso a UI não carregue dados:

- Abra F12 → Console e verifique por erros (ReferenceError, TypeError).
- Certifique-se que `script.js` está incluído em `index.html` e que o servidor está servindo os arquivos via HTTP (não `file://`).
- Se algum alimento não mostrar nutrientes, edite `tabelaNutricional` em `script.js` e adicione a chave correspondente (ex.: `creatina`, `aveia`).

Contato:

Se precisar, posso atualizar `tabelaNutricional` com mais itens ou adicionar testes automatizados.
