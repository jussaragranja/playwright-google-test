const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true, // Executar testes no modo headless
    viewport: { width: 1280, height: 720 }, // Tamanho da janela do navegador
    baseURL: 'https://www.google.com', // URL base para os testes
    screenshot: 'only-on-failure', // Capturar screenshots apenas em falhas
    video: 'retain-on-failure', // Gravar vídeos apenas em falhas
  },
  reporter: [
    ['list'], // Exibe os resultados no terminal
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Gera um relatório HTML
  ],

//   reporter: [
//     ['list'], // Exibe os resultados no terminal
//     ['html', { outputFolder: 'playwright-report', open: 'never' }], // Relatório HTML
//     ['json', { outputFile: 'report.json' }], // Relatório JSON
//     ['junit', { outputFile: 'results.xml' }], // Relatório JUnit (para integração com CI/CD)
//   ],

});