// ApexBank — ALL simulated data lives here (Milestone 1).
// Later milestones replace these fixtures with Netlify Database + API calls (see PLAN.md).
// Everything is fictional. Exposed as window.ApexData.

window.ApexData = {
  bank: {
    nome: 'ApexBank Digital S.A.',
    fantasia: 'ApexBank',
    codigoCompe: '777',
    ispb: '77700011',
    cnpj: '07.770.001/0001-77',
    sede: 'Av. das Palmeiras, 1987 — Centro Financeiro, São Paulo/SP',
    fundacao: 1987,
    sac: '0800 777 1987',
    ouvidoria: '0800 777 0101',
    deficienciaAuditiva: '0800 777 0202',
    capitalSocial: 2850000000,
    clientes: 8_400_000,
    agencias: 312,
    colaboradores: 11_870,
  },

  // Fictional corporate history
  historia: [
    { ano: 1987, titulo: 'Fundação como Cooperativa Apex', texto: 'Um grupo de 42 metalúrgicos do ABC paulista funda a Cooperativa de Crédito Apex, com sede em uma sala alugada em São Bernardo do Campo, para oferecer crédito justo a trabalhadores.' },
    { ano: 1994, titulo: 'Plano Real e expansão', texto: 'Com a estabilização da moeda, a cooperativa ultrapassa 100 mil cooperados e abre 18 postos de atendimento no interior de São Paulo e Minas Gerais.' },
    { ano: 2001, titulo: 'Conversão em banco múltiplo', texto: 'Após autorização do Banco Central, a cooperativa se converte no Banco Apex S.A., banco múltiplo com carteiras comercial, de crédito e de investimento.' },
    { ano: 2008, titulo: 'Crise global e solidez', texto: 'Mantendo índice de Basileia acima de 16%, o Apex atravessa a crise sem demissões e lança sua primeira linha de crédito consignado para aposentados do INSS.' },
    { ano: 2014, titulo: 'Abertura de capital (APXB3)', texto: 'IPO no segmento Novo Mercado da B3, com compromisso de governança, tag along de 100% e conselho com maioria independente.' },
    { ano: 2019, titulo: 'Nasce o ApexBank Digital', texto: 'Lançamento do app e da conta 100% digital, sem tarifas de manutenção. Rebranding para ApexBank Digital S.A.' },
    { ano: 2020, titulo: 'Pix desde o primeiro dia', texto: 'Participante direto do SPI desde a estreia do Pix em 16/11/2020, com mais de 1 milhão de chaves cadastradas na primeira semana.' },
    { ano: 2023, titulo: 'Open Finance e Programa Recomeçar', texto: 'Integração completa ao Open Finance Brasil e criação do Programa Recomeçar, de renegociação para clientes negativados, alinhado à Lei do Superendividamento.' },
    { ano: 2026, titulo: 'Plataforma v3.2', texto: '8,4 milhões de clientes, 312 agências e certificação ISO/IEC 27001. Lançamento do painel unificado Cliente & Agência.' },
  ],

  valores: ['Crédito justo e transparente', 'Inclusão financeira', 'Segurança e sigilo', 'Respeito ao consumidor', 'Sustentabilidade (ESG)'],

  // Organizational structure — top to bottom. `nivel` = hierarchy depth.
  setores: [
    { id: 'assembleia', nome: 'Assembleia Geral de Acionistas', nivel: 0, icon: 'users', descricao: 'Órgão soberano. Aprova contas, elege o Conselho e altera o Estatuto Social.' },
    { id: 'conselho', nome: 'Conselho de Administração', nivel: 1, icon: 'landmark', descricao: '9 membros (5 independentes). Define estratégia, apetite a risco e elege a Diretoria.' },
    { id: 'conselho-fiscal', nome: 'Conselho Fiscal', nivel: 1, icon: 'scale', descricao: 'Fiscaliza os atos da administração e opina sobre as demonstrações financeiras.' },
    { id: 'auditoria', nome: 'Comitê de Auditoria', nivel: 1, icon: 'file-search', descricao: 'Exigido pela Res. CMN 4.910/2021. Supervisiona auditoria interna e externa.' },
    { id: 'presidencia', nome: 'Presidência (CEO)', nivel: 2, icon: 'crown', descricao: 'Representa o banco e coordena a Diretoria Executiva.' },
    { id: 'dir-varejo', nome: 'Diretoria de Varejo & Agências', nivel: 3, icon: 'store', descricao: 'Rede de 312 agências, PF, PJ, INSS e atendimento.' },
    { id: 'dir-credito', nome: 'Diretoria de Crédito & Cobrança', nivel: 3, icon: 'coins', descricao: 'Política de crédito, consignado, recuperação e Programa Recomeçar.' },
    { id: 'dir-riscos', nome: 'Diretoria de Riscos & Compliance (CRO)', nivel: 3, icon: 'shield-alert', descricao: 'Gerenciamento integrado de riscos, PLD/FT, controles internos.' },
    { id: 'dir-juridico', nome: 'Diretoria Jurídica', nivel: 3, icon: 'gavel', descricao: 'Contencioso, consultivo, regulatório e LGPD (DPO).' },
    { id: 'dir-ti', nome: 'Diretoria de Tecnologia (CTO/CISO)', nivel: 3, icon: 'server', descricao: 'Infraestrutura, Pix/SPI, segurança cibernética e dados.' },
    { id: 'dir-financeira', nome: 'Diretoria Financeira & Tesouraria (CFO)', nivel: 3, icon: 'bar-chart-3', descricao: 'Tesouraria, liquidez, contabilidade e relações com investidores.' },
    { id: 'dir-pessoas', nome: 'Diretoria de Pessoas (RH)', nivel: 3, icon: 'heart-handshake', descricao: 'Recrutamento, treinamento, certificações CPA e jovem aprendiz.' },
    { id: 'ouvidoria', nome: 'Ouvidoria', nivel: 3, icon: 'megaphone', descricao: 'Última instância de atendimento (Res. CMN 4.860/2020). Prazo de resposta: 10 dias úteis.' },
    { id: 'superintendencia', nome: 'Superintendência Regional', nivel: 4, icon: 'map', descricao: 'Coordena grupos de 20–30 agências por região.' },
    { id: 'gerencia-geral', nome: 'Gerência Geral de Agência', nivel: 5, icon: 'building-2', descricao: 'Responsável pelo resultado, equipe e segurança da agência.' },
    { id: 'gerencia-pf', nome: 'Gerência de Relacionamento PF', nivel: 6, icon: 'user-round', descricao: 'Carteira de pessoas físicas, crédito, investimentos e seguros.' },
    { id: 'gerencia-pj', nome: 'Gerência de Relacionamento PJ', nivel: 6, icon: 'briefcase', descricao: 'Empresas: capital de giro, cobrança, folha de pagamento.' },
    { id: 'gerencia-inss', nome: 'Gerência INSS & Previdência', nivel: 6, icon: 'hand-heart', descricao: 'Aposentados, pensionistas, BPC/LOAS, consignado e prova de vida.' },
    { id: 'gerencia-invest', nome: 'Especialista de Investimentos', nivel: 6, icon: 'trending-up', descricao: 'Suitability (Res. CVM 30), CDB, Tesouro, fundos, previdência privada.' },
    { id: 'supervisao', nome: 'Supervisão Administrativa', nivel: 7, icon: 'clipboard-check', descricao: 'Tesouraria da agência, numerário, abertura e fechamento.' },
    { id: 'caixa', nome: 'Caixa Executivo', nivel: 8, icon: 'banknote', descricao: 'Depósitos, saques, pagamentos de boletos e autenticações.' },
    { id: 'atendimento', nome: 'Assistente de Atendimento', nivel: 8, icon: 'headset', descricao: 'Recepção, abertura de contas, senhas e orientações.' },
    { id: 'backoffice', nome: 'Back-office / Retaguarda', nivel: 8, icon: 'archive', descricao: 'Cadastro, compensação, documentos e digitalização.' },
    { id: 'seguranca', nome: 'Vigilância & Segurança Patrimonial', nivel: 8, icon: 'shield', descricao: 'Lei 7.102/1983: vigilantes, porta giratória, cofres.' },
    { id: 'estagio', nome: 'Estagiário(a) & Jovem Aprendiz', nivel: 9, icon: 'graduation-cap', descricao: 'Lei 11.788/2008 (estágio) e Lei 10.097/2000 (aprendiz).' },
  ],

  // Staff demo accounts for the Agência portal (role -> permitted modules)
  funcionarios: [
    { matricula: 'F0001', nome: 'Helena Duarte Vasconcelos', cargo: 'Diretora-Presidente', setor: 'presidencia', perfil: 'diretoria', agencia: 'Matriz' },
    { matricula: 'F0102', nome: 'Ricardo Moura', cargo: 'Superintendente Regional SP-Capital', setor: 'superintendencia', perfil: 'superintendente', agencia: 'Regional 01' },
    { matricula: 'F1021', nome: 'Patrícia Nogueira', cargo: 'Gerente Geral', setor: 'gerencia-geral', perfil: 'gerente_geral', agencia: '0001 — Centro SP' },
    { matricula: 'F2210', nome: 'Marcos Antônio Lima', cargo: 'Gerente de Relacionamento PF', setor: 'gerencia-pf', perfil: 'gerente_contas', agencia: '0001 — Centro SP' },
    { matricula: 'F2311', nome: 'Juliana Prado', cargo: 'Gerente INSS & Previdência', setor: 'gerencia-inss', perfil: 'gerente_inss', agencia: '0001 — Centro SP' },
    { matricula: 'F3305', nome: 'Diego Ferreira', cargo: 'Caixa Executivo', setor: 'caixa', perfil: 'caixa', agencia: '0001 — Centro SP' },
    { matricula: 'F3410', nome: 'Aline Costa', cargo: 'Assistente de Atendimento', setor: 'atendimento', perfil: 'atendimento', agencia: '0001 — Centro SP' },
    { matricula: 'F4100', nome: 'Dra. Fernanda Rocha', cargo: 'Advogada Sênior', setor: 'dir-juridico', perfil: 'juridico', agencia: 'Matriz' },
    { matricula: 'F4200', nome: 'Paulo Henrique Saraiva', cargo: 'Analista de Compliance PLD/FT', setor: 'dir-riscos', perfil: 'compliance', agencia: 'Matriz' },
    { matricula: 'F4300', nome: 'Camila Teixeira', cargo: 'Coordenadora de Cobrança', setor: 'dir-credito', perfil: 'cobranca', agencia: 'Matriz' },
    { matricula: 'F4400', nome: 'Renato Okada', cargo: 'Analista de Segurança (SOC)', setor: 'dir-ti', perfil: 'ti', agencia: 'Matriz' },
    { matricula: 'F4500', nome: 'Beatriz Almeida', cargo: 'Ouvidora', setor: 'ouvidoria', perfil: 'ouvidoria', agencia: 'Matriz' },
    { matricula: 'F4600', nome: 'Sandra Regina Melo', cargo: 'Business Partner de RH', setor: 'dir-pessoas', perfil: 'rh', agencia: 'Matriz' },
    { matricula: 'F9001', nome: 'Lucas Batista', cargo: 'Jovem Aprendiz', setor: 'estagio', perfil: 'aprendiz', agencia: '0001 — Centro SP' },
  ],

  // Which Agência modules each profile may open
  permissoes: {
    diretoria: ['visao', 'organograma', 'clientes', 'credito', 'caixa', 'inss', 'cobranca', 'compliance', 'juridico', 'ouvidoria', 'rh', 'ti', 'agencias'],
    superintendente: ['visao', 'organograma', 'agencias', 'clientes', 'credito', 'cobranca', 'ouvidoria', 'rh'],
    gerente_geral: ['visao', 'organograma', 'clientes', 'credito', 'caixa', 'inss', 'cobranca', 'ouvidoria', 'rh'],
    gerente_contas: ['visao', 'organograma', 'clientes', 'credito', 'cobranca'],
    gerente_inss: ['visao', 'organograma', 'clientes', 'inss', 'credito'],
    caixa: ['visao', 'organograma', 'caixa'],
    atendimento: ['visao', 'organograma', 'clientes', 'senhas'],
    juridico: ['visao', 'organograma', 'juridico', 'cobranca'],
    compliance: ['visao', 'organograma', 'compliance', 'clientes'],
    cobranca: ['visao', 'organograma', 'cobranca', 'clientes'],
    ti: ['visao', 'organograma', 'ti'],
    ouvidoria: ['visao', 'organograma', 'ouvidoria'],
    rh: ['visao', 'organograma', 'rh'],
    aprendiz: ['visao', 'organograma', 'senhas'],
  },

  agencias: [
    { codigo: '0001', nome: 'Centro SP', cidade: 'São Paulo/SP', gerente: 'Patrícia Nogueira', clientes: 18420, meta: 92, nps: 74, status: 'aberta' },
    { codigo: '0002', nome: 'Paulista', cidade: 'São Paulo/SP', gerente: 'Otávio Reis', clientes: 22110, meta: 104, nps: 81, status: 'aberta' },
    { codigo: '0014', nome: 'São Bernardo', cidade: 'São Bernardo do Campo/SP', gerente: 'Lígia Martins', clientes: 15230, meta: 88, nps: 77, status: 'aberta' },
    { codigo: '0033', nome: 'Savassi', cidade: 'Belo Horizonte/MG', gerente: 'Henrique Castro', clientes: 12980, meta: 97, nps: 79, status: 'aberta' },
    { codigo: '0051', nome: 'Boa Viagem', cidade: 'Recife/PE', gerente: 'Ana Clara Bezerra', clientes: 10440, meta: 110, nps: 85, status: 'aberta' },
    { codigo: '0078', nome: 'Centro Histórico', cidade: 'Porto Alegre/RS', gerente: 'Gustavo Weber', clientes: 9870, meta: 79, nps: 70, status: 'em reforma' },
  ],

  // Demo client (internet banking). CPF/senha de demonstração: 123.456.789-00 / 123456
  cliente: {
    nome: 'Carlos Silva',
    cpf: '123.456.789-00',
    nascimento: '14/03/1961',
    email: 'carlos.silva@email.com',
    telefone: '(11) 98877-6655',
    endereco: 'Rua das Acácias, 210 — Vila Mariana, São Paulo/SP',
    agencia: '0001',
    conta: '88291-4',
    id: 'BANK-88291',
    segmento: 'Apex Prime',
    gerente: 'Marcos Antônio Lima',
    ip: '189.28.102.44',
    mac: '74:D0:2B:99:A1:C2',
    saldo: 14850.20,
    poupanca: 22340.75,
    chequeEspecial: 2000,
    score: 742,
    rendaMensal: 6850,
    perfilInvestidor: 'Moderado',
  },

  chavesPix: [
    { tipo: 'CPF', valor: '123.456.789-00' },
    { tipo: 'E-mail', valor: 'carlos.silva@email.com' },
    { tipo: 'Telefone', valor: '+55 11 98877-6655' },
    { tipo: 'Aleatória', valor: '7f3a9c21-4b8e-4d2a-9f11-0c6e8b2d55a1' },
  ],

  transacoes: [
    { id: '1', date: '13/10/2026 19:42', desc: 'Pix Recebido - Maria Santos', type: 'pix', amount: 350.00, isCredit: true, auth: 'E88129302192' },
    { id: '2', date: '12/10/2026 11:15', desc: 'Pagamento Mercado Livre', type: 'card', amount: 120.50, isCredit: false, auth: 'C99201928301' },
    { id: '3', date: '10/10/2026 09:30', desc: 'TED Enviada - Banco Itaú', type: 'ted', amount: 1200.00, isCredit: false, auth: 'T44310291029' },
    { id: '4', date: '07/10/2026 08:00', desc: 'Crédito Benefício INSS - Aposentadoria', type: 'inss', amount: 4210.37, isCredit: true, auth: 'INSS0710263321' },
    { id: '5', date: '05/10/2026 14:22', desc: 'Boleto - Enel Energia', type: 'boleto', amount: 238.90, isCredit: false, auth: 'B23891029384' },
    { id: '6', date: '05/10/2026 10:05', desc: 'Parcela Consignado INSS 14/84', type: 'consignado', amount: 612.44, isCredit: false, auth: 'CSG0510261402' },
    { id: '7', date: '01/10/2026 07:10', desc: 'Rendimento Poupança', type: 'invest', amount: 138.12, isCredit: true, auth: 'POU0110260001' },
    { id: '8', date: '28/09/2026 18:40', desc: 'Pix Enviado - Padaria Bom Dia', type: 'pix', amount: 42.00, isCredit: false, auth: 'E77219302001' },
  ],

  cartoes: [
    { id: 'c1', nome: 'Apex Platinum', tipo: 'Crédito', bandeira: 'Visa', final: '8821', validade: '10/29', limite: 5000, fatura: 1240.50, vencimento: '20/10/2026', bloqueado: false, cor: 'from-slate-900 via-emerald-900 to-teal-800' },
    { id: 'c2', nome: 'Apex Débito', tipo: 'Débito', bandeira: 'Mastercard', final: '1407', validade: '05/28', limite: 0, fatura: 0, vencimento: '—', bloqueado: false, cor: 'from-slate-800 via-slate-700 to-slate-900' },
    { id: 'c3', nome: 'Cartão Benefício INSS', tipo: 'Consignado (RMC/RCC)', bandeira: 'Elo', final: '5530', validade: '02/30', limite: 1450, fatura: 310.00, vencimento: 'Desconto em folha', bloqueado: false, cor: 'from-indigo-900 via-blue-900 to-sky-800' },
  ],

  comprasCartao: [
    { desc: 'Supermercado Silva', quando: 'Hoje, 14:20', modo: 'Crédito', valor: 342.10 },
    { desc: 'Assinatura Streaming', quando: 'Ontem, 08:00', modo: 'Virtual', valor: 55.90 },
    { desc: 'Farmácia Popular', quando: '10/10, 17:45', modo: 'Benefício INSS', valor: 89.30 },
    { desc: 'Posto Ipiranga', quando: '09/10, 07:12', modo: 'Crédito', valor: 210.00 },
  ],

  // Credit products
  produtosCredito: [
    { id: 'pessoal', nome: 'Crédito Pessoal', taxa: 0.0345, prazoMax: 48, descricao: 'Sem garantia, liberação imediata.' },
    { id: 'consignado-inss', nome: 'Consignado INSS', taxa: 0.0185, prazoMax: 96, descricao: 'Para aposentados e pensionistas. Taxa limitada pelo CNPS (valor simulado).' },
    { id: 'consignado-publico', nome: 'Consignado Servidor Público', taxa: 0.0165, prazoMax: 96, descricao: 'Desconto em folha para servidores conveniados.' },
    { id: 'clt', nome: 'Consignado CLT (Crédito do Trabalhador)', taxa: 0.0290, prazoMax: 48, descricao: 'Desconto em folha via eSocial, com FGTS em garantia.' },
    { id: 'fgts', nome: 'Antecipação Saque-Aniversário FGTS', taxa: 0.0179, prazoMax: 10, descricao: 'Antecipe até 10 parcelas anuais do FGTS.' },
    { id: 'imobiliario', nome: 'Financiamento Imobiliário (SFH)', taxa: 0.0095, prazoMax: 420, descricao: 'Até 80% do imóvel, sistema SAC ou Price.' },
    { id: 'veiculo', nome: 'Financiamento de Veículos (CDC)', taxa: 0.0189, prazoMax: 60, descricao: 'Veículo como garantia (alienação fiduciária).' },
  ],

  contratos: [
    { id: 'CT-2024-11873', produto: 'Consignado INSS', valor: 30000, parcela: 612.44, pagas: 14, total: 84, taxa: 0.0172, status: 'Em dia' },
    { id: 'CT-2025-02231', produto: 'Crédito Pessoal', valor: 4000, parcela: 289.10, pagas: 9, total: 24, taxa: 0.0345, status: 'Em dia' },
  ],

  investimentos: [
    { nome: 'CDB Apex Liquidez Diária', tipo: 'Renda Fixa', rent: '100% CDI', saldo: 8200.00, risco: 'Baixo', fgc: true },
    { nome: 'Tesouro IPCA+ 2035', tipo: 'Tesouro Direto', rent: 'IPCA + 6,8%', saldo: 12500.00, risco: 'Baixo', fgc: false },
    { nome: 'LCI Apex 2 anos', tipo: 'Renda Fixa (isento IR)', rent: '94% CDI', saldo: 5000.00, risco: 'Baixo', fgc: true },
    { nome: 'Apex Multimercado FIC', tipo: 'Fundo', rent: '+11,2% 12m', saldo: 3150.40, risco: 'Médio', fgc: false },
    { nome: 'Apex Previdência PGBL', tipo: 'Previdência Privada', rent: '+9,8% 12m', saldo: 18900.00, risco: 'Baixo', fgc: false },
  ],

  ofertasInvest: [
    { nome: 'CDB Apex 120% CDI', prazo: '3 anos', min: 500, risco: 'Baixo', fgc: true },
    { nome: 'LCA Agro 96% CDI', prazo: '1 ano', min: 1000, risco: 'Baixo', fgc: true },
    { nome: 'Tesouro Selic 2029', prazo: 'Liquidez D+1', min: 150, risco: 'Baixo', fgc: false },
    { nome: 'Apex Ações Brasil FIA', prazo: 'D+30', min: 100, risco: 'Alto', fgc: false },
  ],

  seguros: [
    { nome: 'Seguro de Vida Apex', premio: 39.90, cobertura: 150000, ativo: true },
    { nome: 'Seguro Residencial', premio: 24.50, cobertura: 300000, ativo: false },
    { nome: 'Proteção Pix & Cartão', premio: 9.90, cobertura: 10000, ativo: true },
    { nome: 'Assistência Funeral Familiar', premio: 14.90, cobertura: 8000, ativo: false },
  ],

  // INSS benefits of the demo client
  inss: {
    nb: '187.442.991-0',
    especie: '41 — Aposentadoria por Idade (Urbana)',
    dib: '14/03/2026',
    valorBruto: 4810.37,
    descontos: [
      { desc: 'Consignado ApexBank (CT-2024-11873)', valor: 612.44 },
      { desc: 'RMC — Cartão Benefício', valor: 0 },
      { desc: 'IRRF', valor: 0 },
    ],
    margem: { total: 0.45, emprestimo: 0.35, cartaoConsignado: 0.05, cartaoBeneficio: 0.05 },
    provaDeVida: 'Realizada automaticamente via cruzamento de dados (Gov.br) em 02/06/2026',
    pagamento: 'Todo dia 07 (final do NB 0)',
    calendario: [
      { final: '1 e 6', data: '25/09' }, { final: '2 e 7', data: '26/09' }, { final: '3 e 8', data: '29/09' },
      { final: '4 e 9', data: '30/09' }, { final: '5 e 0', data: '01/10' },
    ],
  },

  // Regras simplificadas pós-EC 103/2019 (simulação educativa)
  regrasAposentadoria: {
    idade: { homem: { idade: 65, contribuicao: 20 }, mulher: { idade: 62, contribuicao: 15 } },
    pontos2026: { homem: 103, mulher: 93 },
    tetoINSS2026: 8475.55,
    salarioMinimo2026: 1630.00,
  },

  bpc: {
    nome: 'BPC/LOAS — Benefício de Prestação Continuada',
    lei: 'Lei 8.742/1993 (LOAS), art. 20',
    valor: 'Um salário mínimo mensal',
    publico: ['Pessoa idosa com 65 anos ou mais', 'Pessoa com deficiência de longo prazo (impedimento de no mínimo 2 anos)'],
    criterios: ['Renda familiar por pessoa de até 1/4 do salário mínimo', 'Inscrição atualizada no CadÚnico', 'Não é necessário ter contribuído ao INSS', 'Não gera 13º nem pensão por morte'],
  },

  // Negativação / restrições do cliente e do mercado (simulado)
  restricoes: [
    { credor: 'Telefônica Móvel S.A.', origem: 'Serasa', valor: 389.70, desde: '11/2024', status: 'Ativa', desconto: 0.70 },
    { credor: 'Loja Magazine Fictícia', origem: 'SPC Brasil', valor: 1240.00, desde: '03/2023', status: 'Ativa', desconto: 0.85 },
    { credor: 'ApexBank — Cheque Especial', origem: 'Boa Vista SCPC', valor: 860.15, desde: '07/2025', status: 'Em negociação', desconto: 0.60 },
  ],

  // === Agência data ===
  clientesCarteira: [
    { nome: 'Carlos Silva', cpf: '123.456.789-00', segmento: 'Prime', saldo: 14850.20, score: 742, risco: 'Baixo', inss: true, restricao: true, ultimoContato: '02/10/2026' },
    { nome: 'Maria Aparecida Santos', cpf: '231.554.120-09', segmento: 'Varejo', saldo: 1210.55, score: 610, risco: 'Médio', inss: true, restricao: false, ultimoContato: '28/09/2026' },
    { nome: 'João Pedro Oliveira', cpf: '445.201.887-31', segmento: 'Universitário', saldo: 320.00, score: 540, risco: 'Médio', inss: false, restricao: false, ultimoContato: '15/09/2026' },
    { nome: 'Roberta Mendes ME', cpf: '41.220.998/0001-12', segmento: 'PJ Empresas', saldo: 88420.10, score: 801, risco: 'Baixo', inss: false, restricao: false, ultimoContato: '10/10/2026' },
    { nome: 'Antônio Carlos Ribeiro', cpf: '019.338.447-80', segmento: 'Varejo', saldo: -420.90, score: 388, risco: 'Alto', inss: true, restricao: true, ultimoContato: '01/08/2026' },
    { nome: 'Francisca das Chagas', cpf: '772.019.334-56', segmento: 'BPC/LOAS', saldo: 98.20, score: 455, risco: 'Médio', inss: true, restricao: false, ultimoContato: '07/10/2026' },
    { nome: 'Eduardo Tanaka', cpf: '338.900.112-74', segmento: 'Private', saldo: 1254300.00, score: 912, risco: 'Baixo', inss: false, restricao: false, ultimoContato: '11/10/2026' },
  ],

  propostasCredito: [
    { id: 'PR-55120', cliente: 'Maria Aparecida Santos', produto: 'Consignado INSS', valor: 12000, prazo: 84, score: 610, margemLivre: 540.00, parecer: 'Margem suficiente', status: 'Pendente' },
    { id: 'PR-55121', cliente: 'João Pedro Oliveira', produto: 'Crédito Pessoal', valor: 3000, prazo: 24, score: 540, margemLivre: null, parecer: 'Renda não comprovada', status: 'Pendente' },
    { id: 'PR-55122', cliente: 'Roberta Mendes ME', produto: 'Capital de Giro PJ', valor: 150000, prazo: 36, score: 801, margemLivre: null, parecer: 'Faturamento compatível', status: 'Pendente' },
    { id: 'PR-55123', cliente: 'Antônio Carlos Ribeiro', produto: 'Crédito Pessoal', valor: 8000, prazo: 48, score: 388, margemLivre: null, parecer: 'Restrição ativa + superendividamento', status: 'Pendente' },
  ],

  filaSenhas: [
    { senha: 'P001', tipo: 'Prioritário (Lei 10.048/2000)', servico: 'Saque INSS', espera: 4 },
    { senha: 'N014', tipo: 'Normal', servico: 'Depósito', espera: 9 },
    { senha: 'P002', tipo: 'Prioritário 80+ (Lei 13.466/2017)', servico: 'Prova de vida', espera: 2 },
    { senha: 'G003', tipo: 'Gerência', servico: 'Renegociação de dívida', espera: 12 },
    { senha: 'N015', tipo: 'Normal', servico: 'Pagamento de boleto', espera: 6 },
  ],

  alertasPLD: [
    { id: 'AL-9001', cliente: 'Cliente #44120', regra: 'Fracionamento de depósitos em espécie < R$ 2.000 (smurfing)', valor: 19800, nivel: 'Alto', status: 'Em análise' },
    { id: 'AL-9002', cliente: 'Cliente #10233', regra: 'Pix recebidos de 37 contas distintas em 24h (conta laranja)', valor: 54320, nivel: 'Crítico', status: 'Novo' },
    { id: 'AL-9003', cliente: 'Cliente #88291', regra: 'Saque em espécie acima de R$ 50.000 (Circ. BCB 3.978/2020)', valor: 61000, nivel: 'Médio', status: 'Novo' },
    { id: 'AL-9004', cliente: 'Cliente #70011', regra: 'Pessoa Exposta Politicamente (PEP) — movimentação atípica', valor: 230000, nivel: 'Alto', status: 'Novo' },
  ],

  processosJuridicos: [
    { numero: '1023344-12.2026.8.26.0100', tipo: 'Consumidor (JEC)', assunto: 'Cobrança indevida de tarifa', valor: 8500, fase: 'Audiência de conciliação', risco: 'Possível' },
    { numero: '5001223-88.2025.4.03.6100', tipo: 'Previdenciário (JF)', assunto: 'Desconto consignado não reconhecido (INSS)', valor: 15200, fase: 'Instrução', risco: 'Provável' },
    { numero: '0012876-55.2024.5.02.0033', tipo: 'Trabalhista (TRT-2)', assunto: 'Horas extras — bancário (art. 224 CLT)', valor: 92000, fase: 'Recurso Ordinário', risco: 'Possível' },
    { numero: '1100456-31.2026.8.26.0002', tipo: 'Cível', assunto: 'Golpe do Pix — pedido de indenização (Súmula 479 STJ)', valor: 22000, fase: 'Contestação', risco: 'Provável' },
    { numero: 'PA-BACEN-2026/0042', tipo: 'Administrativo (BCB)', assunto: 'Atraso na devolução MED', valor: 0, fase: 'Defesa apresentada', risco: 'Remoto' },
  ],

  reclamacoes: [
    { protocolo: 'OUV-2026-10211', canal: 'Consumidor.gov.br', cliente: 'Antônio C. Ribeiro', assunto: 'Negativação após quitação', prazo: 3, status: 'Aberta' },
    { protocolo: 'OUV-2026-10212', canal: 'BACEN (RDR)', cliente: 'Maria A. Santos', assunto: 'Empréstimo consignado não solicitado', prazo: 7, status: 'Aberta' },
    { protocolo: 'OUV-2026-10213', canal: 'Procon-SP', cliente: 'Lucas F. Gomes', assunto: 'Demora no reembolso MED', prazo: 1, status: 'Urgente' },
    { protocolo: 'OUV-2026-10199', canal: 'SAC 0800', cliente: 'Clara Moreira', assunto: 'Cartão bloqueado indevidamente', prazo: 0, status: 'Resolvida' },
  ],

  devedores: [
    { cliente: 'Antônio Carlos Ribeiro', contrato: 'CT-2023-09812', produto: 'Crédito Pessoal', atraso: 214, valor: 9420.30, negativado: true, faixa: '180+ dias' },
    { cliente: 'Telma Rodrigues', contrato: 'CT-2025-01177', produto: 'Cartão de Crédito', atraso: 62, valor: 3120.00, negativado: true, faixa: '61–90 dias' },
    { cliente: 'Bruno Vieira', contrato: 'CT-2025-04490', produto: 'Cheque Especial', atraso: 18, valor: 860.15, negativado: false, faixa: '1–30 dias' },
    { cliente: 'Construtora Alfa Ltda', contrato: 'CT-2024-PJ-0331', produto: 'Capital de Giro', atraso: 95, valor: 184000.00, negativado: true, faixa: '91–180 dias' },
  ],

  incidentesTI: [
    { id: 'INC-7781', sev: 'P2', sistema: 'Gateway Pix (SPI)', desc: 'Latência elevada no DICT', status: 'Mitigado' },
    { id: 'INC-7782', sev: 'P3', sistema: 'App Mobile', desc: 'Falha intermitente de push notification', status: 'Em análise' },
    { id: 'SEC-1203', sev: 'P1', sistema: 'SOC / SIEM', desc: 'Tentativa de credential stuffing bloqueada (3.120 IPs)', status: 'Contido' },
  ],

  rh: {
    headcount: 11870,
    vagas: [
      { cargo: 'Gerente de Relacionamento PF', local: 'São Paulo/SP', requisito: 'CPA-20', status: 'Aberta' },
      { cargo: 'Caixa Executivo', local: 'Recife/PE', requisito: 'Ensino médio', status: 'Aberta' },
      { cargo: 'Jovem Aprendiz', local: 'Belo Horizonte/MG', requisito: '14 a 24 anos', status: 'Aberta' },
      { cargo: 'Analista PLD/FT', local: 'Matriz', requisito: 'CPA-10 + experiência', status: 'Em entrevistas' },
    ],
    treinamentos: [
      { nome: 'PLD/FT Anual (obrigatório)', conclusao: 0.87 },
      { nome: 'LGPD e Sigilo Bancário (LC 105/2001)', conclusao: 0.92 },
      { nome: 'Atendimento à Pessoa Idosa (Estatuto da Pessoa Idosa)', conclusao: 0.78 },
      { nome: 'Prevenção a Golpes e Engenharia Social', conclusao: 0.81 },
    ],
    jornada: 'Bancários: 6h diárias / 30h semanais (art. 224 da CLT); cargos de confiança: 8h.',
  },

  // Legislation & norms referenced across the platform (real Brazilian norms, summarized)
  legislacao: [
    { grupo: 'Sistema Financeiro', norma: 'Lei 4.595/1964', titulo: 'Lei do Sistema Financeiro Nacional', resumo: 'Cria o Conselho Monetário Nacional e o Banco Central; regula as instituições financeiras.' },
    { grupo: 'Sistema Financeiro', norma: 'Constituição Federal, art. 192', titulo: 'Sistema Financeiro Nacional', resumo: 'O SFN será estruturado de forma a promover o desenvolvimento equilibrado do País e servir aos interesses da coletividade.' },
    { grupo: 'Sistema Financeiro', norma: 'LC 179/2021', titulo: 'Autonomia do Banco Central', resumo: 'Define objetivos do BCB e mandatos fixos para sua diretoria.' },
    { grupo: 'Sistema Financeiro', norma: 'Res. CMN 4.966/2021', titulo: 'Instrumentos financeiros (IFRS 9)', resumo: 'Critérios contábeis e de provisão para perdas esperadas.' },
    { grupo: 'Consumidor', norma: 'Lei 8.078/1990 (CDC)', titulo: 'Código de Defesa do Consumidor', resumo: 'Aplica-se às instituições financeiras (Súmula 297 STJ). Art. 43 regula cadastros de inadimplentes.' },
    { grupo: 'Consumidor', norma: 'Lei 14.181/2021', titulo: 'Lei do Superendividamento', resumo: 'Prevê crédito responsável, preservação do mínimo existencial e repactuação de dívidas.' },
    { grupo: 'Consumidor', norma: 'Res. CMN 4.949/2021', titulo: 'Relacionamento com clientes', resumo: 'Princípios de conduta, transparência e adequação de produtos ao perfil do cliente.' },
    { grupo: 'Consumidor', norma: 'Res. CMN 3.919/2010', titulo: 'Tarifas bancárias', resumo: 'Define serviços essenciais gratuitos e regras de cobrança de tarifas.' },
    { grupo: 'Consumidor', norma: 'Res. CMN 4.860/2020', titulo: 'Ouvidoria', resumo: 'Obriga a manutenção de ouvidoria e prazo de resposta de até 10 dias úteis.' },
    { grupo: 'Consumidor', norma: 'Decreto 11.034/2022', titulo: 'Lei do SAC', resumo: 'SAC gratuito, 24h para serviços essenciais e resolução em até 7 dias corridos.' },
    { grupo: 'Pix & Pagamentos', norma: 'Res. BCB 1/2020', titulo: 'Regulamento do Pix', resumo: 'Institui o arranjo de pagamentos Pix e o Mecanismo Especial de Devolução (MED).' },
    { grupo: 'Pix & Pagamentos', norma: 'Lei 12.865/2013', titulo: 'Arranjos de pagamento', resumo: 'Regula arranjos e instituições de pagamento no SPB.' },
    { grupo: 'Pix & Pagamentos', norma: 'Res. BCB 142/2021', titulo: 'Limites noturnos de Pix', resumo: 'Limite padrão de R$ 1.000 entre 20h e 6h para pessoas físicas.' },
    { grupo: 'Sigilo & Dados', norma: 'LC 105/2001', titulo: 'Sigilo Bancário', resumo: 'Instituições devem manter sigilo de suas operações ativas, passivas e serviços prestados.' },
    { grupo: 'Sigilo & Dados', norma: 'Lei 13.709/2018 (LGPD)', titulo: 'Lei Geral de Proteção de Dados', resumo: 'Bases legais, direitos do titular, encarregado (DPO) e notificação de incidentes à ANPD.' },
    { grupo: 'Sigilo & Dados', norma: 'Res. CMN 4.893/2021', titulo: 'Segurança cibernética', resumo: 'Política de segurança cibernética, nuvem e plano de resposta a incidentes.' },
    { grupo: 'Sigilo & Dados', norma: 'Res. Conjunta 1/2020', titulo: 'Open Finance', resumo: 'Compartilhamento padronizado de dados e serviços mediante consentimento.' },
    { grupo: 'PLD/FT', norma: 'Lei 9.613/1998', titulo: 'Lavagem de Dinheiro', resumo: 'Tipifica o crime e cria o COAF; obriga comunicação de operações suspeitas.' },
    { grupo: 'PLD/FT', norma: 'Circular BCB 3.978/2020', titulo: 'Política de PLD/FT', resumo: 'Conheça seu cliente (KYC), avaliação interna de risco e comunicação ao COAF.' },
    { grupo: 'PLD/FT', norma: 'Lei 13.260/2016', titulo: 'Antiterrorismo', resumo: 'Disciplina o financiamento ao terrorismo.' },
    { grupo: 'Crédito', norma: 'Lei 12.414/2011', titulo: 'Cadastro Positivo', resumo: 'Histórico de pagamentos para formação de score; adesão automática (LC 166/2019).' },
    { grupo: 'Crédito', norma: 'Lei 10.820/2003', titulo: 'Crédito Consignado', resumo: 'Desconto em folha e benefício previdenciário; margens definidas em lei.' },
    { grupo: 'Crédito', norma: 'Lei 14.431/2022', titulo: 'Margem consignável INSS', resumo: 'Margem total de 45%: 35% empréstimo, 5% cartão consignado e 5% cartão benefício.' },
    { grupo: 'Crédito', norma: 'Lei 9.514/1997', titulo: 'Alienação fiduciária de imóveis', resumo: 'Base do financiamento imobiliário e do SFI.' },
    { grupo: 'Previdência & Assistência', norma: 'Lei 8.213/1991', titulo: 'Planos de Benefícios da Previdência', resumo: 'Aposentadorias, pensões, auxílios e salário-maternidade.' },
    { grupo: 'Previdência & Assistência', norma: 'EC 103/2019', titulo: 'Reforma da Previdência', resumo: 'Idade mínima (65H/62M), regras de transição e novo cálculo do benefício.' },
    { grupo: 'Previdência & Assistência', norma: 'Lei 8.742/1993 (LOAS)', titulo: 'Lei Orgânica da Assistência Social', resumo: 'Institui o BPC: um salário mínimo à pessoa idosa (65+) ou com deficiência de baixa renda.' },
    { grupo: 'Previdência & Assistência', norma: 'Lei 10.741/2003', titulo: 'Estatuto da Pessoa Idosa', resumo: 'Atendimento prioritário e proteção contra abuso financeiro.' },
    { grupo: 'Previdência & Assistência', norma: 'Lei 13.146/2015', titulo: 'Estatuto da Pessoa com Deficiência', resumo: 'Acessibilidade e atendimento prioritário.' },
    { grupo: 'Societário & Trabalho', norma: 'Lei 6.404/1976', titulo: 'Lei das S.A.', resumo: 'Regras de sociedades anônimas, órgãos sociais e direitos dos acionistas.' },
    { grupo: 'Societário & Trabalho', norma: 'CLT, arts. 224 a 226', titulo: 'Jornada do bancário', resumo: 'Jornada de 6 horas diárias para empregados de bancos.' },
    { grupo: 'Societário & Trabalho', norma: 'Lei 7.102/1983', titulo: 'Segurança bancária', resumo: 'Exige sistema de segurança e vigilância em estabelecimentos financeiros.' },
    { grupo: 'Garantias', norma: 'Res. CMN 4.222/2013', titulo: 'Fundo Garantidor de Créditos (FGC)', resumo: 'Garantia de até R$ 250 mil por CPF por instituição, teto de R$ 1 milhão a cada 4 anos.' },
  ],

  // Fictional Estatuto Social (excerpts)
  estatuto: [
    { cap: 'Capítulo I — Denominação, Sede, Objeto e Duração', artigos: [
      'Art. 1º O ApexBank Digital S.A. ("Companhia") é sociedade anônima de capital aberto, regida por este Estatuto, pela Lei 6.404/1976 e pela regulamentação do Conselho Monetário Nacional e do Banco Central do Brasil.',
      'Art. 2º A Companhia tem sede e foro na cidade de São Paulo/SP, podendo abrir e encerrar agências, postos e escritórios em todo o território nacional, mediante deliberação da Diretoria.',
      'Art. 3º A Companhia tem por objeto a prática de operações ativas, passivas e acessórias inerentes às carteiras comercial, de crédito, financiamento e investimento, de crédito imobiliário e de arrendamento mercantil, inclusive câmbio.',
      'Art. 4º O prazo de duração da Companhia é indeterminado.',
    ]},
    { cap: 'Capítulo II — Capital Social e Ações', artigos: [
      'Art. 5º O capital social é de R$ 2.850.000.000,00, dividido em ações ordinárias, nominativas e sem valor nominal.',
      'Art. 6º Cada ação ordinária confere direito a um voto nas deliberações da Assembleia Geral.',
    ]},
    { cap: 'Capítulo III — Administração', artigos: [
      'Art. 12. A Companhia é administrada pelo Conselho de Administração e pela Diretoria Executiva.',
      'Art. 13. O Conselho de Administração é composto por 9 membros, dos quais no mínimo 5 independentes, com mandato unificado de 2 anos, permitida a reeleição.',
      'Art. 18. A Diretoria Executiva é composta por um Diretor-Presidente e até 8 Diretores Executivos, cujos nomes serão submetidos à homologação do Banco Central do Brasil.',
    ]},
    { cap: 'Capítulo IV — Comitês, Ouvidoria e Compliance', artigos: [
      'Art. 25. A Companhia manterá Comitê de Auditoria, Comitê de Riscos e Comitê de Remuneração, nos termos da regulamentação vigente.',
      'Art. 27. A Ouvidoria atuará como canal de última instância, com autonomia e reporte direto ao Conselho de Administração.',
      'Art. 28. A área de Compliance e PLD/FT reportará diretamente ao Diretor de Riscos (CRO), sendo vedada sua subordinação a áreas de negócio.',
    ]},
    { cap: 'Capítulo V — Exercício Social e Lucros', artigos: [
      'Art. 33. O exercício social coincide com o ano civil.',
      'Art. 34. Do lucro líquido, 5% serão destinados à reserva legal e, no mínimo, 25% do lucro ajustado serão distribuídos como dividendo obrigatório.',
    ]},
    { cap: 'Capítulo VI — Código de Ética', artigos: [
      'Art. 40. Todos os administradores e colaboradores aderem ao Código de Ética e Conduta, vedadas práticas de venda casada, assédio comercial e oferta de crédito a pessoa idosa ou analfabeta por telefone sem solicitação expressa.',
      'Art. 41. Violações podem ser comunicadas anonimamente pelo Canal de Denúncias, garantida a não retaliação.',
    ]},
  ],

  tarifas: [
    { servico: 'Manutenção de conta digital', valor: 0 },
    { servico: 'Pix (pessoa física)', valor: 0 },
    { servico: 'TED (app)', valor: 0 },
    { servico: 'Saque — 4 por mês (serviço essencial)', valor: 0 },
    { servico: 'Saque adicional', valor: 6.50 },
    { servico: 'Segunda via de cartão', valor: 12.00 },
    { servico: 'Extrato impresso adicional', valor: 2.80 },
  ],

  indicadores: {
    selic: 0.1425, cdi: 0.1415, ipca12m: 0.0472, dolar: 5.38, basileia: 0.168, inadimplencia90: 0.032, roe: 0.184, lucroTri: 1_420_000_000,
  },
};
