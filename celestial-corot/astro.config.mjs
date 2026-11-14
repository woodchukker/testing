// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static', // Ensures compilation into plain HTML/CSS/JS
	site: 'https://woodchukker.github.io',
	base: '/testing',
	integrations: [
		starlight({
			title: 'NBF Lov og regler',
			logo: {
				src: '/public/targeticon.svg',
			},
			favicon: '/targeticon.svg',
			credits: true,
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			editLink: {
				baseUrl: 'https://github.com/woodchukker/testing/edit/main/celestial-corot/',
			},
			sidebar: [
				 {
					label: 'Lov og regler',
					items: [
						{
							label: 'NBFs Lov',
							collapsed: true,
							items: [
								{label: 'NBFs Lov', slug: 'nbfregler/nbfindex' },
							],
						},
						{
							label: 'Vedtak og Regler',
							collapsed: true,
							items: [
								{
									label: 'Regelverk B',
									collapsed: true,
									items: [
										{ autogenerate: { directory: 'vedtakogregler/regelverkb' } },
									],
								},
								{
									label: 'Regelverk C',
									collapsed: true,
									items: [
										{ autogenerate: { directory: 'vedtakogregler/regelverkc' } },
									],
								},
								{
									label: 'Regelverk D',
									collapsed: true,
									items: [
										{ autogenerate: { directory: 'vedtakogregler/regelverkd' } },
										],
								},
								{
									label: 'Avstandstabeller',
									collapsed: true,
									items: [
										{ autogenerate: { directory: 'vedtakogregler/avstander' } },
										],
								},
							],
						},
						{
							label: 'Andre regler',
							collapsed: true,
							items: [
								{label: 'Andre regler', slug: 'andreregler/andreindex' }
							]
						},
						{
							label: 'Diverse dokumenter',
							collapsed: true,
							items: [
								{label: 'Diverse dokumenter', slug: 'diverse/diverseindex' }
							]
						},
					],
       			 },
			],
		}),
	],
});
