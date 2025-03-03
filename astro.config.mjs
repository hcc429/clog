// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	server: {
		allowedHosts: ["localhost", "m4mini.ishcc.net"] // Bug: it should set to true to allow any host
	},
	integrations: [
		starlight({
			title: 'clog',
			social: {
				github: 'https://github.com/hcc429',
			},
			sidebar: [
				{
					label: "Hello Stranger",
					link: "/notes/hello"	
				},
				{
					label: 'Redis',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'notes/example' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			plugins: [
				starlightBlog({
					title: "blog",
					
				}),
			]
		}),
	],
	site: 'https://hcc429.github.io',
	base: '/clog'
});
