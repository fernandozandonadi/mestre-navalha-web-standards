# mestre-navalha-web-standards
Implementação front-end da Barbearia Mestre da Navalha focada em Padrões Web (HTML5, CSS3 Grid) e Lógica JavaScript (Status da Loja). Projeto complementar à versão No-Code (Webflow).


# 💈 Barbearia Mestre da Navalha (Versão Web Standards)

> Projeto acadêmico desenvolvido para a disciplina de **Padrões Web para No Code e Low Code** do curso de IA e Automação Digital (UniFECAF).

## 🎯 Objetivo deste Repositório

Este repositório atua como um ambiente de demonstração de código (Low-Code) complementar à versão principal do projeto desenvolvida em Webflow.

Devido às limitações do plano gratuito do Webflow (que impede a injeção de Custom Code e scripts personalizados), esta versão foi criada para demonstrar a competência técnica exigida no trabalho, especificamente:

* **Lógica de Programação:** com JavaScript (Manipulação do DOM).
* **Estruturação Semântica:** HTML5 Puro.
* **Estilização Manual:** CSS3 Grid e Flexbox.

🔗 [Acesse a versão Visual/CMS (Webflow) aqui](https://site-barbearia-d34dd4.webflow.io/)

---

## 🚀 Funcionalidades Exclusivas desta Versão

Enquanto a versão Webflow foca em Design e CMS, esta versão GitHub implementa:

### 1. Verificação de Status (Aberto/Fechado)
Um script JavaScript verifica o horário do sistema do usuário e informa em tempo real se a barbearia está aberta.

* **Lógica:** Aberto das 09h às 19h (Segunda a Sábado).
* **Técnica:** Manipulação segura do DOM via `textContent` e `classList` (evitando `innerHTML` por segurança).

### 2. Grid de Serviços com CSS Puro
Diferente do Webflow onde usei CMS Collections, aqui demonstro o conhecimento de **CSS Grid Layout** para criar a grade de serviços responsiva manualmente.

### 3. Botão WhatsApp "Sticky"
Implementação manual de um botão de ação flutuante (`position: fixed`) utilizando apenas HTML e CSS.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica (`<header>`, `<section>`, `<nav>`).
* **CSS3:** Variáveis CSS (`:root`), Flexbox, Grid Layout e Media Queries.
* **JavaScript (ES6):** Lógica condicional e manipulação de eventos.
* **FontAwesome:** Ícones vetoriais.

---

## 📂 Comparativo de Arquitetura

| Funcionalidade | Versão Webflow (No-Code) | Versão GitHub (Low-Code) |
| :--- | :--- | :--- |
| **Interface** | Visual Canvas (Drag & Drop) | HTML/CSS Escrito à mão |
| **Gestão de Dados** | CMS Collection | HTML Estático |
| **Lógica de Horário** | Não suportado (Limitação Free) | JavaScript Customizado |
| **Banco de Dados** | Google Sheets + Make | Simulação (Alert) |
| **Responsividade** | Breakpoints Nativos | Media Queries Manuais |

---

## 🖥️ Como visualizar o projeto

### Opção 1: Link Direto
Acesse o projeto rodando online através do GitHub Pages:
👉 https://fernandoheimrik.github.io/mestre-navalha-web-standards/

### Opção 2: Rodar Localmente
Clone este repositório:

```bash
git clone [https://github.com/SEU-USUARIO/mestre-navalha-web-standards.git](https://github.com/SEU-USUARIO/mestre-navalha-web-standards.git)