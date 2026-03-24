---
layout: default
title: Sacar recebimentos
section: Vendedor
---

<span class="page-badge vendor">Vendedor · Etapa 05</span>

# Sacar recebimentos

O fluxo financeiro do vendedor une três elementos: saldo disponível, chave PIX cadastrada e
solicitação de saque.

---

## Entender o resumo financeiro

Na área `Financeiro`, o app exibe:

| Campo                   | Descrição                           |
| ----------------------- | ----------------------------------- |
| Disponível bruto        | saldo total antes da taxa           |
| Taxa aplicada           | percentual deduzido pelo FlowPay    |
| Valor líquido a receber | valor após a taxa                   |
| Valor já sacado         | total transferido até o momento     |
| Valor em processamento  | saques em andamento, quando existir |

> A taxa é individual por conta e definida pelo FlowPay. O percentual exato fica visível na área
> `Financeiro` do painel, ao lado do saldo disponível. O valor líquido já considera a taxa
> descontada antes do saque.

---

## Solicitar saque

1.  Confira o saldo disponível
2.  Informe um valor (mínimo R$ 1,00) ou deixe em branco para sacar tudo
3.  Clique em `Sacar agora`

Antes do envio, o sistema mostra uma previsão com:

- valor bruto
- taxa
- valor líquido

---

## Prazo do saque

O prazo informado pelo app é de até `1 dia útil (D+1)`.

---

## Acompanhar histórico de saques

Na seção `Histórico`, você acompanha:

- valor líquido
- chave PIX usada
- valor bruto
- taxa
- status
- data de criação
- data de conclusão, quando houver

### Status possíveis

| Status           | Significado                                            |
| ---------------- | ------------------------------------------------------ |
| Aguardando       | saque recebido, aguardando processamento               |
| Em transferência | saque em curso para a chave PIX informada              |
| Recebido         | transferência concluída                                |
| Falhou           | erro no processamento — entre em contato com o suporte |
| Cancelado        | saque cancelado pelo sistema                           |

---

## Mensagens do sistema

**Mensagens esperadas:**

- `Saque solicitado!`

**Mensagens de atenção:**

- `Informe um valor válido maior que zero.`
- `Valor excede o saldo disponível`
- `Erro ao processar saque.`

---

## Validações

O app bloqueia:

- valor inválido
- valor menor ou igual a zero
- valor mínimo para saque: R$ 1,00
- valor acima do saldo disponível
- saque sem chave PIX cadastrada

---

## FAQ sobre saque

### O saque cai na hora?

Não. O prazo informado no app é de até `1 dia útil (D+1)`.

### Posso sacar apenas uma parte do saldo?

Sim. Informe o valor desejado. Se deixar em branco, o app tenta sacar tudo.

---

<div class="page-nav">
  <a href="{{ "/vendedor/pagamentos" | relative_url }}" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">Acompanhar pagamentos</span>
  </a>
  <a href="{{ "/vendedor/faq" | relative_url }}" class="page-nav-link next">
    <span class="page-nav-label">Próximo →</span>
    <span class="page-nav-title">FAQ do vendedor</span>
  </a>
</div>
