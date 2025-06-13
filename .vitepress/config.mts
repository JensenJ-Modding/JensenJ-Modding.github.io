import { defineConfig } from "vitepress";
import youshallnottick from "../sidebars/youshallnottick.ts";
import youshallnotpatrol from "../sidebars/youshallnotpatrol.ts";

export default defineConfig({
	title: "JensenJ Modding Wiki",
	description: "A wiki for my mods",
	cleanUrls: true,
	lastUpdated: true,

	head: [["link", { rel: "icon", href: "/jensenj-modding.webp" }]],

	themeConfig: {
		logo: {
			src: "/jensenj-modding.webp",
			width: 24,
			height: 24,
		},

		nav: [{ text: "Home", link: "/" }],

		sidebar: {
			...youshallnottick,
			...youshallnotpatrol
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/JensenJ-Modding/JensenJ-Modding.github.io" },
			{ icon: "discord", link: "https://discord.gg/qw6AQyHQJK" },
		],
	},
});
