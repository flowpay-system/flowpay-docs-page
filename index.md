---
layout: default
title: Início
---

<div class="home-hero">
<img src="{{ '/assets/flowpay-header-logo.webp' | relative_url }}" alt="FlowPay" class="hero-logo">

# Central de Ajuda

Bem-vindo à documentação do FlowPay App. Escolha o seu perfil para começar.

</div>

<div class="profile-cards">

<a href="{{ "/vendedor/acesso" | relative_url }}" class="profile-card vendor">
  <div class="card-label">Perfil</div>
  <span class="card-title">Vendedor</span>
  <p class="card-desc">Receba pagamentos via PIX, gerencie checkouts e solicite saques.</p>
  <div class="card-steps">
    <span class="card-step">01 Acesso</span>
    <span class="card-step">02 PIX</span>
    <span class="card-step">03 Checkout</span>
    <span class="card-step">04 Pagamentos</span>
    <span class="card-step">05 Saque</span>
  </div>
</a>

<a href="{{ "/admin/acesso" | relative_url }}" class="profile-card admin">
  <div class="card-label">Perfil</div>
  <span class="card-title">Administrador</span>
  <p class="card-desc">Governe o acesso de vendedores, aprove contas e monitore o painel.</p>
  <div class="card-steps">
    <span class="card-step">Acesso</span>
    <span class="card-step">Operação</span>
    <span class="card-step">Usuários</span>
  </div>
</a>

</div>

---

## Jornada do vendedor

A sequência recomendada para novos vendedores:

1.  [Criar e acessar sua conta]({{ "/vendedor/acesso" | relative_url }}) — cadastro em flowpay.cash/registro e login via
    link mágico
2.  [Configurar sua chave PIX]({{ "/vendedor/configuracao" | relative_url }}) — necessária antes de solicitar saques
3.  [Criar checkouts e receber pagamentos]({{ "/vendedor/checkout" | relative_url }}) — gerar links e compartilhar com
    clientes
4.  [Acompanhar métricas e transações]({{ "/vendedor/pagamentos" | relative_url }}) — dashboard operacional
5.  [Solicitar saque]({{ "/vendedor/saque" | relative_url }}) — transferência para sua chave PIX

---

## Mensagens e validações

Cada seção deste manual possui um bloco dedicado de **Mensagens do sistema** e **Validações**,
documentando os estados esperados e os erros possíveis em cada etapa.

Se você estiver integrando o FlowPay ao seu workflow de suporte, esses blocos são a referência
direta para mapear respostas do sistema ao comportamento esperado.
