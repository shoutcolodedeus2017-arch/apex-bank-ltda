# ApexBank — Simulador Bancário Interativo

Simulador completo de um banco brasileiro fictício, o **ApexBank Digital S.A.**, com os dois lados da operação:

- **Internet Banking do Cliente** (`/cliente.html`) — conta, Pix/TED/MED, boletos, cartões, crédito e consignado, investimentos, seguros, INSS/aposentadoria/BPC, Limpa Nome (Programa Recomeçar), Open Finance, segurança, perfil/LGPD e atendimento.
- **Portal Agência & Corporativo** (`/agencia.html`) — acesso por cargo, do jovem aprendiz à presidência: caixa, fila de senhas, CRM, mesa de crédito, central INSS, cobrança, compliance PLD/FT, jurídico, ouvidoria, RH, TI e organograma.
- **Institucional** (`/institucional.html`) — história fictícia, governança, estatuto social, legislação e normas, jurídico e privacidade, direitos do consumidor, guias de INSS, BPC/LOAS e negativados, ouvidoria, RI e carreiras.

> Instituição e dados fictícios. Resumos de legislação são educativos e não constituem orientação jurídica.

## Acesso de demonstração
- **Cliente:** CPF `123.456.789-00`, senha `123456` (qualquer valor também é aceito na demonstração).
- **Agência:** use o "Acesso rápido de demonstração" e escolha qualquer colaborador — cada cargo vê módulos diferentes.

## Tecnologias
- HTML estático + JavaScript (sem etapa de build)
- Tailwind CSS (CDN), Lucide Icons, Chart.js
- Hospedagem na Netlify (`netlify.toml` publica a pasta `public/`)

## Rodando localmente
```bash
netlify dev --port 8889
# ou qualquer servidor estático apontando para ./public
```

## Estrutura
```
public/
  index.html          Landing page
  cliente.html        Internet banking do cliente
  agencia.html        Portal da agência e áreas corporativas
  institucional.html  Conteúdo institucional, jurídico e guias
  assets/
    fixtures.js       Todos os dados simulados (window.ApexData)
    common.js         Utilitários de UI compartilhados (window.Apex)
    styles.css        Estilos compartilhados
    tailwind-config.js
```

## Roadmap
Os dados atualmente são simulados e reiniciam ao recarregar a página. As próximas etapas — banco de dados (Netlify Database), autenticação de clientes e colaboradores, APIs reais, integração entre os portais e assistente com IA — estão descritas em [PLAN.md](./PLAN.md).
