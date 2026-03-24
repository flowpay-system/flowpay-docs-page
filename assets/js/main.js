// ── Sidebar mobile ───────────────────────────────────────
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Busca client-side ────────────────────────────────────
const searchData = [
  // Vendedor
  { title: 'Como criar sua conta', section: 'Vendedor — Acesso', url: '/vendedor/acesso', keywords: 'cadastro registro criação conta vendedor aprovação' },
  { title: 'Entrar no app', section: 'Vendedor — Acesso', url: '/vendedor/acesso', keywords: 'login acesso link mágico e-mail entrar' },
  { title: 'Conta em análise', section: 'Vendedor — Acesso', url: '/vendedor/acesso', keywords: 'conta pendente análise aprovação status' },
  { title: 'Configurar chave PIX', section: 'Vendedor — Configuração', url: '/vendedor/configuracao', keywords: 'pix chave cpf e-mail telefone aleatória configurar salvar' },
  { title: 'Criar link de checkout', section: 'Vendedor — Checkout', url: '/vendedor/checkout', keywords: 'checkout link pagamento criar gerar título descrição valor' },
  { title: 'Compartilhar o checkout', section: 'Vendedor — Checkout', url: '/vendedor/checkout', keywords: 'compartilhar link embed iframe copiar' },
  { title: 'Como funciona o QR PIX', section: 'Vendedor — Checkout', url: '/vendedor/checkout', keywords: 'qr code pix cliente pagamento gerar qrcode' },
  { title: 'Gerenciar links ativos', section: 'Vendedor — Checkout', url: '/vendedor/checkout', keywords: 'links ativos remover excluir abrir copiar' },
  { title: 'Métricas e dashboard', section: 'Vendedor — Pagamentos', url: '/vendedor/pagamentos', keywords: 'métricas total recebido vendas conversão ticket médio últimos 7 dias' },
  { title: 'Exportar transações CSV', section: 'Vendedor — Pagamentos', url: '/vendedor/pagamentos', keywords: 'exportar csv transações histórico download' },
  { title: 'Resumo financeiro', section: 'Vendedor — Saque', url: '/vendedor/saque', keywords: 'saldo bruto taxa líquido disponível financeiro' },
  { title: 'Solicitar saque', section: 'Vendedor — Saque', url: '/vendedor/saque', keywords: 'saque solicitar sacar valor mínimo 1 real' },
  { title: 'Status do saque', section: 'Vendedor — Saque', url: '/vendedor/saque', keywords: 'aguardando em transferência recebido falhou cancelado status saque' },
  { title: 'Prazo de saque D+1', section: 'Vendedor — Saque', url: '/vendedor/saque', keywords: 'prazo d+1 dia útil quando cai' },
  // Admin
  { title: 'Acessar painel administrativo', section: 'Administrador', url: '/admin/acesso', keywords: 'admin login senha painel administrativo acesso' },
  { title: 'Aprovar e rejeitar contas', section: 'Administrador', url: '/admin/operacao', keywords: 'aprovar rejeitar suspender reativar conta usuário status' },
  { title: 'Métricas do painel admin', section: 'Administrador', url: '/admin/operacao', keywords: 'pendentes aprovados volume total pedidos métricas admin' },
  { title: 'Encerrar sessão admin', section: 'Administrador', url: '/admin/encerrar', keywords: 'logout sair encerrar sessão admin' },
  // FAQ
  { title: 'FAQ do vendedor', section: 'FAQ', url: '/vendedor/faq', keywords: 'perguntas frequentes faq vendedor link mágico chave pix saque' },
  { title: 'FAQ geral', section: 'FAQ', url: '/faq', keywords: 'faq geral perguntas frequentes dois perfis checkout dashboard' },
];

const input    = document.getElementById('search-input');
const results  = document.getElementById('search-results');

if (input) {
  input.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (q.length < 2) {
      results.innerHTML = '';
      results.classList.remove('active');
      return;
    }

    const hits = searchData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.section.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!hits.length) {
      results.innerHTML = '<div class="search-result-item"><span class="result-title">Nenhum resultado</span></div>';
      results.classList.add('active');
      return;
    }

    results.innerHTML = hits.map(item => {
      const hi = (str) => str.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
      return `<a class="search-result-item" href="${item.url}">
        <span class="result-title">${hi(item.title)}</span>
        <span class="result-section">${item.section}</span>
      </a>`;
    }).join('');

    results.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar-search')) {
      results.classList.remove('active');
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      results.innerHTML = '';
      results.classList.remove('active');
    }
  });
}

// ── Active nav link por URL ──────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname) {
    link.classList.add('active');
  }
});

// ── Smooth scroll para âncoras internas ─────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
