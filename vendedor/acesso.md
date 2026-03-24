---
layout: default
title: Acessar a conta
section: Vendedor
---

<span class="page-badge vendor">Vendedor · Etapa 01</span>

# Acessar a conta

O acesso ao FlowPay App é exclusivo para contas aprovadas. O fluxo começa no cadastro externo e
termina no login via link mágico.

---

## Antes de acessar: como criar sua conta

Para criar sua conta:

1.  Acesse `https://flowpay.cash/registro` (site externo ao app)
2.  Preencha o formulário de cadastro e envie
3.  Sua conta entra em análise após o envio
4.  O acesso ao painel só é liberado após aprovação
5.  Quando aprovado, você recebe instruções para acessar via link mágico

Enquanto a análise estiver em andamento, não é possível acessar o dashboard do app.

---

## Entrar no app

O acesso do vendedor é feito por link mágico enviado para o e-mail aprovado.

1.  Acesse `https://app.flowpay.cash/login`
2.  Digite seu e-mail aprovado
3.  Clique em `Receber link mágico`
4.  Abra o e-mail recebido
5.  Clique no link de acesso
6.  Aguarde a validação automática da sessão

Depois da validação, o app redireciona você para o `Dashboard`.

---

## O que acontece na verificação de acesso

Ao abrir o link mágico, o app valida o token e cria sua sessão.

Se tudo estiver correto:

- a sessão é confirmada
- o acesso é redirecionado para a área correta

Se houver falha:

- o app informa o erro
- você pode voltar ao login e solicitar um novo link

---

## Conta em análise

Se sua conta ainda não estiver aprovada, o app não libera o uso completo do dashboard.

Nessa situação, a interface mostra:

- que o acesso ainda não foi liberado
- o status atual da conta

---

## Mensagens do sistema

**Mensagens esperadas:**

- `Link mágico enviado! Verifique sua caixa de entrada.`
- `Sessão validada`

> **[CONFIRMAR COM BACKEND: TTL do link mágico]** — informar aqui por quanto tempo o link permanece
> válido após o envio (ex: "O link expira em X minutos. Após esse prazo, solicite um novo link na
> tela de login.").

**Mensagens de atenção:**

- `Token ausente. Solicite um novo link de acesso.`
- `Falha na verificação`
- `Sessão indisponível`

---

## Validações e regras de acesso

- o login do vendedor depende de e-mail aprovado
- o link mágico precisa conter token válido
- o app pode redirecionar para `/dashboard` ou para a rota pedida antes do login

---

## FAQ sobre acesso

### Não recebi o link mágico. O que fazer?

Revise spam, promoções e o e-mail digitado. Se necessário, solicite novamente.

### O que significa falha na verificação?

Normalmente significa token inválido, expirado ou problema temporário de comunicação com a API.

---

<div class="page-nav">
  <a href="/" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">Início</span>
  </a>
  <a href="/vendedor/configuracao" class="page-nav-link next">
    <span class="page-nav-label">Próximo →</span>
    <span class="page-nav-title">Configurar PIX</span>
  </a>
</div>
