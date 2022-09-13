
import { trackPageview } from '$lib/components/minigame/wordle/plausible'
import { locales, loadTranslations, getNavigatorLanguage } from '$lib/components/minigame/wordle/translations'
import { storedLocale } from '$lib/components/minigame/wordle/store'
import type { LayoutLoad } from '@sveltejs/kit'
import { get } from 'svelte/store'
import { browser } from '$app/env'
export const load: LayoutLoad = async () => {
	if (!browser) {
		await loadTranslations('en')
		return {}
	}
	let initialLocale = get(storedLocale)
	if (!initialLocale) initialLocale = getNavigatorLanguage()
	if (!locales.get().includes(initialLocale)) initialLocale = 'en'
	storedLocale.set(initialLocale)
	await loadTranslations(initialLocale)
	return {}
}
trackPageview()
