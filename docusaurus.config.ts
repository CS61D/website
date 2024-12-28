import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

const config: Config = {
	title: "61D: Applied Software Development",
	tagline: "Learn by building",
	favicon: "img/brackets.svg",

	// Set the production url of your site here
	url: "https://61d.org",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	// organizationName: "facebook", // Usually your GitHub org/user name.
	// projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/CS61D/website/tree/main/",
				},
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/brackets.svg",
		navbar: {
			title: "61D",
			logo: {
				alt: "brackets",
				src: "img/brackets.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Content",
				},
				{
					label: "Course Overview",
					to: "/overview",
				},
				{
					label: "Syllabus",
					to: "/syllabus",
				},
				{
					href: "https://www.youtube.com/channel/UCn-nlwUrJYsQs1fvAdLXNnA",
					label: "YouTube",
					position: "right",
				},
				{
					href: "https://github.com/CS61D",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Overview",
							to: "/overview",
						},
					],
				},
			],
			copyright: "Build with Docusaurus",
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		algolia: {
			// The application ID provided by Algolia
			appId: "NRGKLBJ96F",

			// Public API key: it is safe to commit it
			apiKey: "0105b33584b905dcd753fce369917221",

			indexName: "61d",

			// Optional: see doc section below
			contextualSearch: true,

			// Optional: Algolia search parameters
			searchParameters: {},

			// Optional: path for search page that enabled by default (`false` to disable it)
			searchPagePath: "search",
		},
	} satisfies Preset.ThemeConfig,
	plugins: [
		[
			"posthog-docusaurus",
			{
				apiKey: process.env.POSTHOG_API_KEY || "DEV",
				enableInDevelopment: false,
			},
		],
	],
};

export default config;
