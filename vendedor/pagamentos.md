---
layout: default
title: Acompanhar pagamentos
section: Vendedor
---

<span class="page-badge vendor">Vendedor · Etapa 04</span>

# Acompanhar pagamentos

Depois que os links estão em circulação, o dashboard vira sua camada de leitura operacional.

---

## Ler o bloco de métricas

As métricas principais exibem:

| Métrica           | Descrição                               |
| ----------------- | --------------------------------------- |
| `Total recebido`  | soma de todos os pagamentos confirmados |
| `Vendas pagas`    | número de transações pagas              |
| `Ticket médio`    | valor médio por transação               |
| `Conversão`       | taxa de conversão dos checkouts         |
| `Pendentes`       | cobranças geradas ainda não pagas       |
| `Últimos 7 dias`  | receita dos últimos 7 dias              |
| `Últimos 30 dias` | receita dos últimos 30 dias             |

Esses dados ajudam a ler desempenho sem precisar abrir relatórios externos.

---

## Acompanhar transações recentes

Na seção `Últimos pagamentos`, o vendedor pode:

- visualizar pagamentos recentes
- ver produto, cliente, valor, status e data
- acompanhar paginação quando houver muitas transações

---

## Exportar transações em CSV

Use o botão `Exportar CSV` para baixar o histórico atual de transações.

O arquivo segue o padrão: `transacoes-flowpay-AAAA-MM-DD.csv`

---

## Mensagens do sistema

**Mensagens esperadas:**

- `PIX gerado com sucesso.`
- `Código PIX copiado.`
- `Endereço copiado.`

**Mensagens de atenção:**

- `Não foi possível abrir o checkout.`
- `Não foi possível gerar o PIX.`
- `Falha ao consultar o status da cobrança.`
- `Não foi possível copiar automaticamente.`

---

## Validações do checkout público

O checkout exige:

- nome preenchido
- e-mail preenchido
- e-mail em formato válido

---

## FAQ sobre acompanhamento e pagamento

### O que o cliente precisa preencher para pagar?

Nome e e-mail válidos antes da geração do PIX.

### O pagamento aparece automaticamente no dashboard?

O dashboard atualiza métricas e transações com refresh automático periódico e também reflete os
dados após novas operações.

---

<div class="page-nav">
  <a href="/vendedor/checkout" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">Receber pagamentos</span>
  </a>
  <a href="/vendedor/saque" class="page-nav-link next">
    <span class="page-nav-label">Próximo →</span>
    <span class="page-nav-title">Sacar recebimentos</span>
  </a>
</div>
