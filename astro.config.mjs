// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Path of Learning',
			social: {
				github: 'https://github.com/OpenScribbler/pathoflearn.ing',
			},
			plugins: [
				starlightSidebarTopics([
				{
					label: 'Path of Exile',
					icon: 'moon',
					link: '/poe/',
					items: [
						{
							label: 'Start Here',
							items: ['poe/overview', 'poe/prereqs'],
						},
						{
							label: 'Learn PoE',
							items: ['poe/learn/1', 'poe/learn/2'],
						},
					]
				},
				{
					label: 'Path of Exile 2',
					icon: 'star',
					link: '/poe2/',
					items: [
						{
						label: 'Start Here',
						items: ['poe2/overview', 'poe2/prereqs'],
						},
						{
							label: 'Learn PoE2',
							items: ['poe2/learn/1', 'poe2/learn/2'],
						},
						]
				},
				]),
			],
		}),
	],
});
