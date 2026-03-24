---
layout: default
title: Operar o painel
section: Administrador
---

<span class="page-badge admin">Administrador</span>

# Operar o painel administrativo

---

## Ler as métricas do topo

No topo do painel, o admin acompanha:

| Métrica | Descrição |
|---|---|
| `Pendentes` | contas aguardando aprovação |
| `Aprovados` | contas ativas |
| `Pedidos` | total de solicitações recebidas |
| `Volume total` | valor agregado movimentado |

---

## Filtrar usuários por status

As abas disponíveis são:

- `Pendentes`
- `Aprovados`
- `Rejeitados`
- `Todos`

---

## Ler a tabela de usuários

A tabela mostra:

- nome
- e-mail
- tipo documental
- segmento
- data de cadastro
- status
- ações disponíveis

---

## Atualizar status de uma conta

Dependendo do status atual, o admin pode:

| Ação | Quando usar |
|---|---|
| `Aprovar` | conta pendente validada |
| `Rejeitar` | conta pendente negada |
| `Suspender` | conta aprovada com problema operacional |
| `Reativar` | conta suspensa ou rejeitada reabilitada |

---

## Navegar na paginação

O painel administrativo usa paginação para navegar entre lotes de usuários.

---

## Mensagens do sistema

**Mensagens esperadas:**

- `Usuário aprovado.`
- `Usuário rejeitado.`
- `Status atualizado.`

**Mensagens de atenção:**

- `Erro ao carregar usuários.`
- `Erro ao atualizar status.`

---

## Validações

- usuários pendentes podem ser aprovados ou rejeitados
- usuários aprovados podem ser suspensos
- usuários suspensos ou rejeitados podem ser reativados

---

## FAQ do administrador

#### O que fazer se a lista não carregar?

Tente novamente e valide se a sessão admin continua ativa.

#### O admin consegue aprovar e suspender usuários pelo mesmo painel?

Sim. As ações mudam de acordo com o status atual de cada conta.

#### O que fazer se um usuário relata não conseguir acessar o app?

Primeiro valide o status da conta no painel admin. Se necessário, ajuste para `APPROVED` e oriente o usuário a solicitar novo link mágico para criar uma sessão limpa.

---

<div class="page-nav">
  <a href="/admin/acesso" class="page-nav-link prev">
    <span class="page-nav-label">← Anterior</span>
    <span class="page-nav-title">Acessar o painel</span>
  </a>
  <a href="/admin/encerrar" class="page-nav-link next">
    <span class="page-nav-label">Próximo →</span>
    <span class="page-nav-title">Encerrar sessão</span>
  </a>
</div>
