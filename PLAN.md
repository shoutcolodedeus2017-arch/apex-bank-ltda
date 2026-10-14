# ApexBank — Product Roadmap

ApexBank is a fully interactive banking simulator with two sides: the **customer** (internet banking) and the **branch/corporate staff** (every sector from the young apprentice up to the board). Content covers a fictional corporate history, real Brazilian banking legislation, a fictional statute, legal/LGPD, INSS, BPC/LOAS, retirement and debt-recovery ("negativados").

## Milestone 1 — Product surface (in progress)
- ✅ Shared foundation: `assets/fixtures.js` (all simulated data: history, sectors, staff, legislation, statute, INSS/BPC, debts, etc.), `assets/common.js`, `assets/styles.css`.
- ✅ Landing page (`/`) connecting all portals, with a working BPC quick check.
- ⏳ Portal Agência (`/agencia.html`): first version exists; needs completion review of all role modules.
- ⬜ Internet Banking do Cliente (`/cliente.html`): account, Pix/TED/MED, boletos, cards, credit & consignado, investments, INSS/aposentadoria/BPC, Limpa Nome, insurance, security, Open Finance, profile/LGPD, support chatbot, IT status, Python API sample.
- ⬜ Remaining Agência modules (`/agencia.html`): role-based modules (overview, org chart, branches, CRM, credit desk, teller, queue, INSS desk, collections, PLD/FT compliance, legal, ombudsman, HR, IT/SOC) plus audit trail.
- ⬜ Institucional (`/institucional.html`): history, governance, statute, legislation, legal & privacy, consumer rights, INSS/BPC/negativados guides, ombudsman, investor relations, careers.
- All data is stubbed in `public/assets/fixtures.js`; state resets on reload.

## Milestone 2 — Data model (Netlify Database)
- Drizzle schema in `db/schema.ts`: customers, accounts, transactions, pix_keys, cards, loans/contracts, investments, insurance_policies, inss_benefits, restrictions/agreements, staff, branches, credit_proposals, pld_alerts, legal_cases, complaints, audit_log.
- Seed migration from the current fixtures.
- Money stored as integer cents; every balance change in a single DB transaction with a ledger entry.

## Milestone 3 — Authentication & authorization
- Netlify Identity for customers and staff (separate roles via `app_metadata.authorization.roles`).
- Map current `ApexData.permissoes` profiles to Identity roles; protect functions per role.
- Session timeout, device registry and 2FA simulation persisted.

## Milestone 4 — Customer APIs (Netlify Functions)
- `/api/accounts`, `/api/pix` (send, keys, QR charge, scheduled, MED), `/api/ted`, `/api/boletos`, `/api/cards` (lock, limit, virtual card), `/api/loans` (simulate, contract, payoff), `/api/investments`, `/api/insurance`.
- Replace fixture reads in `cliente.html` with `fetch` calls, keeping the same UI.

## Milestone 5 — Branch & corporate APIs
- Teller session (open/close cash, authentications), ticket queue, credit desk with approval limits (alçadas), INSS desk, collections (notify → negativar → acordo → baixa), PLD alerts → COAF communication, legal cases & LGPD requests, complaints SLA, HR, IT incidents.
- Persisted, queryable audit trail for every sensitive action.

## Milestone 6 — Cross-portal integration
- Actions in one portal reflect in the other in real time (e.g. a staff-approved proposal appears in the customer's contracts; a negotiated debt clears in collections).
- Notifications center for customers and staff.

## Milestone 7 — AI assistant
- Replace the keyword chatbot ("ApexBot") with Netlify AI Gateway, grounded on the legislation/FAQ content and the customer's own (simulated) data; staff copilot for credit and compliance analysis.

## Milestone 8 — Content & polish
- Move institutional/legal content to editable content files; printable PDF receipts and statements; accessibility audit (WCAG AA); performance pass (replace Tailwind CDN with a compiled build).
