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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			editLink: {
				baseUrl: 'https://github.com/woodchukker/testing/edit/main/celestial-corot/',
			},
			sidebar: [
				 {
					label: 'Lov og regler',
					items: [
						{
							label: 'Vedtak og Regler',
							items: [
								{
									label: 'Regelverk B',
									collapsed: true,
									items: [
										{label: 'Innholdsfortegnelse', slug: 'vedtakogregler/regelverkb/regelbindex' },
									],
								},
								{
									label: 'Regelverk C',
									collapsed: true,
									items: [
										{ label: 'Innholdsfortegnelse', slug: 'vedtakogregler/regelverkc/regelcindex'},
										{ label: 'Skyterunder', slug: 'vedtakogregler/regelverkc/regelc-kap1'},
										{ label: 'Baneutlegg', slug: 'vedtakogregler/regelverkc/regelc-kap2'},
										{ label: 'Baneutstyr', slug: 'vedtakogregler/regelverkc/regelc-kap3'},
										{ label: 'Syktterutstyr', slug: 'vedtakogregler/regelverkc/regelc-kap4',
											badge: {text: 'oppdatert', variant: 'caution'}
											},
										{ label: 'Sykting og adferd', slug: 'vedtakogregler/regelverkc/regelc-kap5'},
										{ label: 'Sykterytme og tidskontrol', slug: 'vedtakogregler/regelverkc/regelc-kap6'},
										{ label: 'Merkering (Scoring)', slug: 'vedtakogregler/regelverkc/regelc-kap7'},
										{ label: 'Syktekontrol og sikkerhet', slug: 'vedtakogregler/regelverkc/regelc-kap8'},
										{ label: 'Konsekvenser og regelbrudd', slug: 'vedtakogregler/regelverkc/regelc-kap9'},
										{ label: 'Trening', slug: 'vedtakogregler/regelverkc/regelc-kap10'},
										{ label: 'Tvil og uenighet', slug: 'vedtakogregler/regelverkc/regelc-kap11'},
										{ label: 'Lagledelse', slug: 'vedtakogregler/regelverkc/regelc-kap12'},
										{ label: 'Appell', slug: 'vedtakogregler/regelverkc/regelc-kap13'},
										{ label: 'Antrekksbestemmelser', slug: 'vedtakogregler/regelverkc/regelc-kap14'},
										{ label: 'Bueskyting for personer med nedsatt funksjonsevne', slug: 'vedtakogregler/regelverkc/regelc-kap15'},
										{ label: 'Protester', slug: 'vedtakogregler/regelverkc/regelc-kap16'},
										{ label: 'Skiveopsett (Tegninger)', slug: 'vedtakogregler/regelverkc/regelc-kap17'},
									],
								},
								{
									label: 'Regelverk D',
									collapsed: true,
									items: [
										{label: 'Innholdsfortegnelse', slug: 'vedtakogregler/regelverkd/regeldindex' },
										],
								},
								{
									label: 'Avstander',
									collapsed: true,
									items: [
										{label: 'Skive innendørs', slug: 'vedtakogregler/avstander/avstand-inne' },
										{label: 'Skive innendørs (Tabbed)', slug: 'vedtakogregler/avstander/avstand-inne-tab',
											badge: {text: 'Experiment', variant: 'danger'}
											},
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
