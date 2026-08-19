import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('specific pokemon can be navigated to successfully', async ({ page }) => {
    await page.goto('/pokemon/charmander')
    await expect(page.getByText('Solar Power')).toBeVisible()
    await expect(page.getByText('Blaze')).toBeVisible()
  })
})
