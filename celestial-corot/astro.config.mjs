// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static', // Ensures compilation into plain HTML/CSS/JS
	site: 'https://woodchukker.github.io',
	base: '/testing/',
	integrations: [
		starlight({
			title: 'NBF Lov og regler',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Regelverk C',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Innholdsfortegnelse', slug: 'regelverkc/regelcindex'},
						{ label: 'Sykterunder', slug: 'regelverkc/regelc-kap1'},
						{ label: 'Baneutlegg', slug: 'regelverkc/regelc-kap2'},
						{ label: 'Baneutstyr', slug: 'regelverkc/regelc-kap3'},
						{ label: 'Syktterutstyr', slug: 'regelverkc/regelc-kap4'},
						{ label: 'Sykting og adferd', slug: 'regelverkc/regelc-kap5'},
						{ label: 'Sykterytme og tidskontrol', slug: 'regelverkc/regelc-kap6'},
						{ label: 'Merkering (Scoring)', slug: 'regelverkc/regelc-kap7'},
						{ label: 'Syktekontrol og sikkerhet', slug: 'regelverkc/regelc-kap8'},
						{ label: 'Konsekvenser og regelbrudd', slug: 'regelverkc/regelc-kap9'},
						{ label: 'Trening', slug: 'regelverkc/regelc-kap10'},
						{ label: 'Tvil og uenighet', slug: 'regelverkc/regelc-kap11'},
						{ label: 'Lagledelse', slug: 'regelverkc/regelc-kap12'},
						{ label: 'Appell', slug: 'regelverkc/regelc-kap13'},
						{ label: 'Antrekksbestemmelser', slug: 'regelverkc/regelc-kap14'},
						{ label: 'Bueskyting for personer med nedsatt funksjonsevne', slug: 'regelverkc/regelc-kap15'},
						{ label: 'Protester', slug: 'regelverkc/regelc-kap16'},
						{ label: 'Skiveopsett (Tegninger)', slug: 'regelverkc/regelc-kap17'},
					],
				},

				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
