---
layout: default
title: Receber pagamentos
section: Vendedor
---

<span class="page-badge vendor">Vendedor · Etapa 03</span>

# Receber pagamentos

Depois do acesso e da configuração inicial, o próximo passo é criar checkouts para cobrar seus
clientes.

---

## Criar um link de checkout

No bloco `Novo link`, preencha:

1.  `Título`
2.  `Descrição`
3.  `Valor em BRL`
4.  método de pagamento

Hoje o fluxo principal é `PIX`.

### Campos do formulário

| Campo          | Descrição                            |
| -------------- | ------------------------------------ |
| `Título`       | nome do produto, serviço ou cobrança |
| `Descrição`    | contexto curto para o cliente        |
| `Valor em BRL` | valor da cobrança                    |
| `PIX`          | método de pagamento ativo            |
| `Cripto`       | aparece como `Em breve`              |

### Gerar o link

1.  Preencha os campos
2.  Clique em `Gerar link`
3.  Aguarde a confirmação do sistema

Depois disso, o app exibe:

- `Link de pagamento`
- `Link para seu site`

---

## Compartilhar o checkout

Depois de criar o checkout, você pode:

- copiar o link público
- compartilhar o link diretamente
- copiar o código de embed para usar em outro site

O formato de embed é um `iframe`.

- dimensões padrão do iframe: `420 x 640px`
- o iframe pode ser incorporado em qualquer site
- restrições de domínio dependem da configuração da conta — consulte o suporte se necessário

---

## Como funciona o checkout do cliente final

O checkout público fica em uma rota como `/checkout/{button_id}`.

Esse é o fluxo que o cliente percorre:

1.  abre o link
2.  informa nome
3.  informa e-mail
4.  clica em `Gerar PIX`
5.  copia o código PIX ou usa o QR Code
6.  aguarda a confirmação do pagamento

### O que o checkout mostra para o cliente

Depois da geração do PIX, o checkout mostra:

- QR Code
- código PIX copia e cola
- status da cobrança
- contagem regressiva quando houver expiração

> O QR Code tem tempo limitado de uso. **[CONFIRMAR COM BACKEND: prazo de expiração do QR PIX]** —
> informar aqui o prazo exato (provavelmente 30 minutos, padrão PIX). Após a expiração, o cliente
> deve retornar ao checkout e gerar um novo QR Code.

---

## Gerenciar links ativos

Na área `Links ativos`, cada checkout criado mostra:

- título
- descrição
- valor
- método de pagamento

Para cada link, existem três ações:

| Ação          | Descrição               |
| ------------- | ----------------------- |
| `Abrir`       | abre o checkout público |
| `Copiar link` | copia a URL pública     |
| `X`           | remove o link           |

---

## Mensagens do sistema

**Mensagens esperadas:**

- `Checkout criado com sucesso.`
- `Link compartilhado com sucesso.`
- `Link copiado (compartilhamento não disponível no navegador).`

**Mensagens de atenção:**

- `Não foi possível criar o checkout.`
- `Não foi possível excluir o link.`
- `Não foi possível compartilhar. Tente copiar o link.`

---

## Validações

- o checkout só é criado após envio correto do formulário
- o valor da cobrança deve ser informado quando o preço for fixo
- links removidos deixam de ser um ponto confiável de cobrança

---

## FAQ sobre criação e compartilhamento

### Posso cobrar qualquer valor?

Sim, desde que o checkout seja criado com o valor desejado no dashboard.

### Posso apagar um link criado?

Sim. Use a ação `X` na área de links ativos.

### O cliente precisa ter conta no FlowPay?

Não. O checkout público foi desenhado para o cliente final acessar pelo link.

---

<div class="page-nav">
  <a href="{{ "/vendedor/configuracao" | relative_url }}" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">Configurar PIX</span>
  </a>
  <a href="{{ "/vendedor/pagamentos" | relative_url }}" class="page-nav-link next">
    <span class="page-nav-label">Próximo →</span>
    <span class="page-nav-title">Acompanhar pagamentos</span>
  </a>
</div>
