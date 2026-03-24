---
layout: default
title: FAQ geral
---

# FAQ geral

Dúvidas que cobrem os dois perfis do FlowPay App.

---

## O FlowPay App é usado apenas por vendedores?

Não. O app possui dois perfis principais: vendedor e administrador.

## O checkout público faz parte do dashboard?

Não. O dashboard é a área operacional do vendedor. O checkout público é a página de pagamento aberta
pelo cliente final.

## Onde encontrar rapidamente erros e mensagens importantes?

Cada seção desta documentação possui um bloco próprio de **Mensagens do sistema** e **Validações**,
pronto para reaproveitamento em central de ajuda e artigos curtos.

## O que fazer quando o app apresenta erro de sessão ou conexão?

Tente novamente após alguns minutos e refaça o login. Se o erro persistir, valide conectividade de
rede e credenciais do perfil usado.

## Como o vendedor sabe se seu cadastro foi aprovado?

No dashboard, o status da conta fica visível no cartão de usuário. Se ainda estiver em análise, o
app informa que o acesso completo não foi liberado.

## Qual é o fluxo esperado quando um pagamento não aparece no dashboard?

Confirme o status no checkout do cliente, atualize o dashboard e verifique a lista de
`Últimos pagamentos`. Se ainda não refletir, exporte o CSV atual para conciliação e valide com o
time de operação.

## O que o admin deve fazer se um usuário relata não conseguir acessar o app?

Primeiro valide o status da conta no painel admin. Se necessário, ajuste para `APPROVED` e oriente o
usuário a solicitar novo link mágico para criar uma sessão limpa.

---

<div class="page-nav">
  <a href="{{ "/admin/encerrar" | relative_url }}" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">Encerrar sessão</span>
  </a>
  <a href="{{ "/" | relative_url }}" class="page-nav-link next">
    <span class="page-nav-label">↑ Início</span>
    <span class="page-nav-title">Voltar ao início</span>
  </a>
</div>
