# **Playwright Google Test**

Este projeto utiliza o [Playwright](https://playwright.dev/) para realizar testes automatizados na página inicial do Google. O objetivo principal é validar o texto exibido no botão "Pesquisa Google". O projeto é configurado para gerar relatórios detalhados em HTML, capturas de tela e vídeos em caso de falhas.

## **Pré-requisitos**

Antes de começar, certifique-se de ter os seguintes itens instalados:

1. [Node.js](https://nodejs.org/) (versão 14 ou superior)
2. [Git](https://git-scm.com/)

## **Instalação**

1. Clone este repositório:
   ```bash
   git clone https://github.com/jussaragranja/playwright-google-test.git
   cd playwright-google-test
   ```
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Instale os navegadores necessários para o Playwright:
   ```bash
   npx playwright install
   ```
## **Estrutura do Projeto**
   ```bash
    playwright-google-test/
   ├── tests/                # Pasta contendo os testes
   │   └── google.spec.js    # Teste que valida o texto da página inicial do Google
   ├── playwright.config.js  # Configuração do Playwright
   ├── package.json          # Configuração do projeto Node.js
   ├── node_modules/         # Dependências instaladas
   └── playwright-report/    # Relatórios gerados após a execução dos testes
   ```

## **Configuração**
O arquivo playwright.config.js contém as configurações do projeto, como o modo headless, tamanho da viewport, URL base e geração de relatórios. Você pode personalizá-lo conforme necessário.

### **Como Executar os Testes**

1. Para executar os testes, use o seguinte comando:
   ```bash
    npx playwright test
   ```
2. Para visualizar o relatório HTML gerado após a execução dos testes:
   ```bash
    npx playwright show-report
   ```
### **Relatórios**

Os relatórios são gerados automaticamente após a execução dos testes e podem ser encontrados na pasta playwright-report/. Eles incluem:

- Resultados detalhados dos testes
- Capturas de tela em caso de falhas
- Vídeos das execuções (se configurado)
