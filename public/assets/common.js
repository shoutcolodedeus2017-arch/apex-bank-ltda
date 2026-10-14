// ApexBank — shared UI helpers used by every page.
// Exposes a single global: window.Apex

(function () {
  const brl = (v) => Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const pct = (v, d = 2) => `${Number(v).toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d })}%`;
  const nowBR = () => new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const authCode = (prefix = 'E') => prefix + Math.random().toString(36).slice(2, 14).toUpperCase();
  const initials = (name) => name.split(' ').filter(Boolean).map((n) => n[0]).join('').substring(0, 2).toUpperCase();
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Price (Tabela Price) installment
  const price = (pv, rateMonthly, n) => {
    if (rateMonthly === 0) return pv / n;
    const f = Math.pow(1 + rateMonthly, n);
    return (pv * rateMonthly * f) / (f - 1);
  };

  function ensureToastContainer() {
    let c = document.getElementById('toastContainer');
    if (!c) {
      c = document.createElement('div');
      c.id = 'toastContainer';
      c.className = 'fixed top-5 right-5 z-[60] flex flex-col gap-3 max-w-sm w-full pointer-events-none';
      document.body.appendChild(c);
    }
    return c;
  }

  function toast(message, type = 'info') {
    const container = ensureToastContainer();
    const el = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200'
      : type === 'error' ? 'bg-rose-950/90 border-rose-500/50 text-rose-200'
      : type === 'warn' ? 'bg-amber-950/90 border-amber-500/50 text-amber-200'
      : 'bg-slate-900/90 border-slate-700 text-slate-200';
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : type === 'warn' ? 'alert-circle' : 'info';
    el.className = `p-3.5 rounded-2xl border ${bg} shadow-xl backdrop-blur-md text-xs font-medium flex items-center gap-2 pointer-events-auto transition duration-300 fade-in`;
    el.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 shrink-0"></i><span class="flex-1">${message}</span>`;
    container.appendChild(el);
    icons();
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 3800);
  }

  function icons() { if (window.lucide) window.lucide.createIcons(); }

  // Generic modal: Apex.modal({ title, body (html), actions: [{label, kind, onClick}] })
  function modal({ title, body, actions = [], wide = false }) {
    const wrap = document.createElement('div');
    wrap.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 fade-in';
    wrap.innerHTML = `
      <div class="bg-slate-900 border border-slate-800 rounded-3xl ${wide ? 'max-w-2xl' : 'max-w-md'} w-full p-6 space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button data-close class="absolute top-4 right-4 text-slate-400 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        <h3 class="text-lg font-bold text-white pr-8">${title}</h3>
        <div data-body class="text-xs text-slate-300 space-y-3">${body}</div>
        <div data-actions class="flex gap-2 pt-2"></div>
      </div>`;
    const close = () => wrap.remove();
    wrap.addEventListener('click', (e) => { if (e.target === wrap || e.target.closest('[data-close]')) close(); });
    const bar = wrap.querySelector('[data-actions]');
    actions.forEach((a) => {
      const b = document.createElement('button');
      b.className = `flex-1 ${a.kind === 'primary' ? 'btn-primary' : a.kind === 'danger' ? 'btn-danger' : 'btn-ghost'}`;
      b.innerHTML = a.label;
      b.onclick = () => { const keep = a.onClick && a.onClick(wrap); if (keep !== true) close(); };
      bar.appendChild(b);
    });
    if (!actions.length) bar.remove();
    document.body.appendChild(wrap);
    icons();
    return { el: wrap, close };
  }

  // Official-looking receipt
  function receipt({ tipo, valor, data, origem, destino, auth, extra = [] }) {
    const rows = [
      ['Tipo', tipo], ['Valor', brl(valor)], ['Data/Hora', data || nowBR()],
      ['Origem', origem || '—'], ['Destino', destino || '—'], ...extra, ['Autenticação', auth || authCode()],
    ];
    modal({
      title: 'Comprovante',
      body: `<div class="print-area space-y-3 bg-white text-slate-950 p-5 rounded-2xl">
        <div class="text-center border-b pb-3 border-slate-200">
          <h2 class="text-lg font-black text-emerald-700 tracking-tight">ApexBank Digital S.A.</h2>
          <p class="text-[10px] text-slate-500 font-semibold uppercase">Comprovante Oficial de Transação • Banco 777</p>
        </div>
        ${rows.map(([k, v]) => `<div class="flex justify-between gap-4 text-slate-600"><span>${k}:</span><span class="font-semibold text-slate-900 text-right ${k === 'Autenticação' ? 'font-mono text-[10px]' : ''}">${esc(v)}</span></div>`).join('')}
        <div class="pt-3 border-t border-slate-200 flex flex-col items-center">
          ${qrSvg(auth || 'apex')}
          <p class="text-[9px] text-slate-400 mt-2">Documento válido para fins comprobatórios (simulação)</p>
        </div></div>`,
      actions: [{ label: '<i data-lucide="printer" class="w-4 h-4"></i> Imprimir / PDF', kind: 'primary', onClick: () => { window.print(); return true; } }],
    });
  }

  // Deterministic fake QR-like SVG for visual fidelity
  function qrSvg(seed, size = 84) {
    let h = 0; for (const c of String(seed)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const n = 21, cell = size / n; let rects = '';
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const finder = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
      let on;
      if (finder) { const lx = x > 13 ? x - 14 : x, ly = y > 13 ? y - 14 : y; on = lx === 0 || lx === 6 || ly === 0 || ly === 6 || (lx > 1 && lx < 5 && ly > 1 && ly < 5); }
      else { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; on = (h >>> 0) % 2 === 0; }
      if (on) rects += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}"/>`;
    }
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="#0f172a">${rects}</svg>`;
  }

  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    document.querySelectorAll('[data-theme-icon]').forEach((i) => i.setAttribute('data-lucide', html.classList.contains('dark') ? 'moon' : 'sun'));
    icons();
  }

  // Simple tab system: buttons [data-tab="x"] inside navSel toggle panels #tab-x (class .tab-content)
  function tabs({ navSelector, activeClass, inactiveClass, onChange }) {
    const btns = document.querySelectorAll(`${navSelector} [data-tab]`);
    const show = (name) => {
      document.querySelectorAll('.tab-content').forEach((p) => p.classList.add('hidden'));
      const panel = document.getElementById(`tab-${name}`);
      if (panel) { panel.classList.remove('hidden'); panel.classList.add('fade-in'); }
      btns.forEach((b) => { b.className = `${b.dataset.base || ''} ${b.dataset.tab === name ? activeClass : inactiveClass}`; });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onChange && onChange(name);
    };
    btns.forEach((b) => { b.dataset.base = b.className; b.addEventListener('click', () => show(b.dataset.tab)); });
    return show;
  }

  window.Apex = { brl, pct, nowBR, authCode, initials, esc, price, toast, icons, modal, receipt, qrSvg, toggleTheme, tabs };
})();
