---
layout: default
title: Acessar o painel
section: Administrador
---

<span class="page-badge admin">Administrador</span>

# Acessar o painel administrativo

O administrador é o perfil responsável por governar acesso, risco operacional e estado das contas no
FlowPay.

**Responsabilidades principais:**

- validar ou negar acesso de novos usuários
- manter o status das contas coerente com a operação
- monitorar indicadores do painel administrativo

---

## Entrar no admin

Existem dois caminhos:

- abrir `https://app.flowpay.cash/login?area=admin`
- tentar acessar `/admin` e deixar o app redirecionar para o login admin

---

## Fazer login como administrador

1.  Acesse a tela de admin
2.  Digite a senha de administrador
3.  Clique em `Entrar como Admin`

Se a autenticação for aceita, a sessão admin é criada e o sistema envia você para `/admin`.

---

## Mensagens do sistema

**Mensagens de atenção:**

- `Falha de conexão. Tente novamente.`
- mensagens retornadas pela API de autenticação admin

---

## Validações

- o painel `/admin` exige sessão autenticada
- se a sessão não existir, o app redireciona para o login admin

---

<div class="page-nav">
  <a href="/vendedor/faq" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">FAQ do vendedor</span>
  </a>
  <a href="/admin/operacao" class="page-nav-link next">
    <span class="page-nav-label">Próximo →</span>
    <span class="page-nav-title">Operar o painel</span>
  </a>
</div>
