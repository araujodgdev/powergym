import {test, expect, type Page} from '@playwright/test';

test('Deve ir para a página de cadastro', async ({page}: {page: Page}) => {
    await page.goto('/login');

    await page.click('text=CADASTRAR');

    await expect(page).toHaveURL('/signup');
    await expect(page.locator('h2')).toContainText('Crie sua conta');
})