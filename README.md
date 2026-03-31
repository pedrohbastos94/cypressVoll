# 🏥 VollMed Cypress — Testes Automatizados

Projeto de automação de testes E2E e de API para a aplicação **VollMed**, desenvolvido com **Cypress** durante o curso de QA Avançado.

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) — plugin para testes de API
- [Mochawesome](https://github.com/adamgruber/mochawesome) — gerador de relatórios de testes
- [ESLint](https://eslint.org/) + [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) — linting do código
- [GitHub Actions](https://github.com/features/actions) — CI/CD para execução automática dos testes
- [Cypress Cloud](https://cloud.cypress.io/) — dashboard de execução e gravação dos testes

---

## 📁 Estrutura do projeto

```
cypressVoll/
├── .github/
│   └── workflows/
│       └── cypress.yml        # Pipeline de CI/CD
├── cypress/
│   ├── e2e/                   # Arquivos de teste
│   │   ├── cadastro-sucesso.cy.js
│   │   ├── dashboard.cy.js
│   │   ├── login-clinica.cy.js
│   │   └── login-api.cy.js
│   ├── fixtures/              # Dados de teste
│   │   └── especialistas.json
│   ├── results/               # Relatórios gerados
│   └── support/
│       ├── commands.js        # Comandos customizados
│       └── e2e.js             # Configuração global
├── server/                    # Backend da aplicação (API)
├── web/                       # Frontend da aplicação (React)
├── cypress.config.js          # Configuração do Cypress
├── .eslintrc.json             # Configuração do ESLint
└── package.json
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- npm instalado

### 1. Instalar dependências do projeto principal
```bash
npm install
```

### 2. Instalar e subir o backend
```bash
cd server
npm install
npm start
```
> O servidor sobe na porta **8080**

### 3. Instalar e subir o frontend
```bash
cd web
npm install
npm start
```
> A aplicação sobe na porta **3000**

### 4. Rodar o Cypress
```bash
# Modo interativo (interface gráfica)
npx cypress open

# Modo headless (terminal)
npx cypress run
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `cypress.env.json` na raiz do projeto com as seguintes variáveis:

```json
{
    "email": "seu@email.com",
    "senha": "suasenha",
    "api_login": "http://localhost:8080/auth/login",
    "api_clinica": "http://localhost:8080/clinica"
}
```

> ⚠️ O arquivo `cypress.env.json` está no `.gitignore` e **não deve ser commitado**.

---

## ✅ Testes implementados

### E2E
- Cadastro de clínica com sucesso
- Login de clínica
- Dashboard — cadastro de especialista
- Dashboard — seleção de planos de saúde

### API
- GET na home da aplicação
- POST de login e validação do token JWT
- POST de cadastro de especialista via API

---

## 🤖 CI/CD com GitHub Actions

O projeto possui uma pipeline configurada que executa os testes automaticamente a cada push nas branches `main` e `testes`.

### Secrets necessários no GitHub
Configure em **repositório → Settings → Secrets and variables → Actions**:

| Secret | Descrição |
|---|---|
| `CYPRESS_RECORD_KEY` | Chave do Cypress Cloud |
| `CYPRESS_EMAIL` | Email de login da clínica |
| `CYPRESS_SENHA` | Senha de login da clínica |

---

## 📊 Relatórios

Os relatórios são gerados automaticamente pelo **Mochawesome** após cada execução em `cypress/results/`.

Os testes também são gravados no **Cypress Cloud**:
🔗 https://cloud.cypress.io/projects/oovkxj

---

## 💡 Comandos customizados

| Comando | Descrição |
|---|---|
| `cy.login(email, senha)` | Realiza login via interface com sessão |
| `cy.loginApi(email, senha)` | Realiza login via API e retorna token |
| `cy.cadastraEspecialista(...)` | Preenche e submete formulário de especialista |

---

## 📝 Padrão de commits

O projeto segue o padrão **Conventional Commits**:

```
feat: nova funcionalidade
fix: correção de bug
ci: mudanças no CI/CD
chore: manutenção
test: adição ou correção de testes
docs: documentação
refactor: refatoração
```
