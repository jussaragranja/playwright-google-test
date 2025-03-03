const { test, expect } = require('@playwright/test');

test('Validar texto da página inicial do Google', async ({ page }) => {
    // Navegar para a página inicial do Google
    await page.goto('https://www.google.com.br');

    // Validar o texto do botão "Pesquisa Google"
    const searchButtonText = await page.getAttribute('input[name="btnK"]', 'value');
    expect(searchButtonText).toBe('Pesquisa Google');
});