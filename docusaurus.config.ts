import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "61D: Applied Software Development",
	tagline: "Learn by building",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://education.codifyberkeley.org",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

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
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/Codify-C-Logo-Transparent.png",
		navbar: {
			title: "61D",
			logo: {
				alt: "Codify Logo",
				src: "img/Codify-C-Logo-Transparent.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Content",
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
							to: "/docs/overview",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Codify Instagram",
							href: "https://www.instagram.com/codifyberkeley",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Main Codify Website",
							href: "https://codifyberkeley.org/",
						},
						{
							label: "Codify GitHub",
							href: "https://github.com/Codify-Club-Berkeley",
						},
					],
				},
			],
			copyright: `Maintained by Codify Berkeley, Build with Docusaurus`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
