import { test, expect } from '@playwright/test';
import fs from 'fs'

test.describe('Sign In', () => {

  const authFile: string = './auth/smartlogin.json'
  if (checkIfFileExistsSync(authFile)) {
    console.log('Storage State - Session - File exists!')

  } else {
    console.log('Storage State - Session - does not exist. Creating a new one.');
    signIn()
  }


  function checkIfFileExistsSync(authFile) {
    try {
      fs.accessSync(authFile, fs.constants.F_OK);
      return true;
    } catch (err) {
      return false;
    }
  }

  function signIn() {
    test('Login and save storage state', async ({ page }) => {

      await page.goto('');
      // await page.waitForTimeout(5000)
      await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
      await page.getByRole('textbox', { name: 'Password:' }).fill('test');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByText('Welcome, Tester! | Logout')).toBeVisible();

      await page.context().storageState({ path: './auth/smartlogin.json' });

      // await page.waitForTimeout(5000)
    });
  }

})

