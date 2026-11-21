// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// Import custom plugins
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';

// https://astro.build/config
export default defineConfig({
	output: 'static', // Ensures compilation into plain HTML/CSS/JS

	/* Netlify and Github Pages url config.
	Uncomment/comment the relevant site: url
	for Github pages the editlink further down can also be used
	for Netlify comment out the base: url */
	// site: 'https://netlify.app',
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/woodchukker/testing', target: '_blank', rel: 'noopener noreferer'}],

			// When using Github Pages the edit page link under can be used.
			/* editLink: {
				baseUrl: 'https://github.com/woodchukker/testing/edit/main/celestial-corot/',
			}, */

			// Language config, norwegian as default
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Norsk',
					lang: 'nb-NO',
				},
				'English': {
					label: 'English',
					lang: 'en',
				},
			},

			// Custom plugins
			plugins: [starlightSidebarSwipe()], // No config for this plugin, just works.
			plugins: [starlightScrollToTop({
				/* position: 'left',
				tooltipText: 'Scroll to Top' */
				showProgressRing: 'true',
				showTooltip: 'true',
				svgPath: 'M12 5V19M7 10L12 5L17 10'
			})],

			/* Sidebar config, mainly automatic
			Detailed config in page Frontmatter */
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
