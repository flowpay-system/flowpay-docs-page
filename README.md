# FlowPay Docs — Central de Ajuda

Site estático gerado com Jekyll para GitHub Pages.

## Estrutura

```text
flowpay-docs/
├── _layouts/
│   └── default.html        # layout principal
├── _includes/
│   ├── sidebar.html         # navegação lateral
│   └── topbar.html          # barra superior
├── assets/
│   ├── css/main.css         # estilos
│   └── js/main.js           # sidebar mobile + busca
├── vendedor/
│   ├── acesso.md
│   ├── configuracao.md
│   ├── checkout.md
│   ├── pagamentos.md
│   ├── saque.md
│   └── faq.md
├── index.md
├── faq.md
├── _config.yml
└── Gemfile
```

## Deploy no GitHub Pages

### 1. Criar o repositório

```bash
git init
git remote add origin https://github.com/SEU_USER/flowpay-docs.git
```

### 2. Configurar o GitHub Pages

No repositório → **Settings** → **Pages**:

- Source: `Deploy from a branch`
- Branch: `main` / `root`

### 3. Ajustar o `_config.yml`

Se o site não estiver na raiz do domínio (ex: `usuario.github.io/flowpay-docs`), adicione:

```yaml
baseurl: '/flowpay-docs'
url: 'https://SEU_USER.github.io'
```

Se usar domínio customizado (`docs.flowpay.cash`), deixe:

```yaml
baseurl: ''
url: 'https://docs.flowpay.cash'
```

E adicione um arquivo `CNAME` na raiz:

```text
docs.flowpay.cash
```

### 4. Push

```bash
git add .
git commit -m "feat: initial docs deploy"
git push -u origin main
```

O GitHub Actions faz o build automaticamente. O site fica disponível em 1–2 minutos.

## Rodar localmente

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Pendências antes de publicar

Dois placeholders precisam ser resolvidos com o backend antes da publicação pública:

1.  `vendedor/acesso.md` — TTL do link mágico (linha com
    `[CONFIRMAR COM BACKEND: TTL do link mágico]`)
2.  `vendedor/checkout.md` — prazo de expiração do QR PIX (linha com
    `[CONFIRMAR COM BACKEND: prazo de expiração do QR PIX]`)

Substitua os blocos `> **[CONFIRMAR...]**` pelo prazo confirmado antes de fazer o deploy público.
