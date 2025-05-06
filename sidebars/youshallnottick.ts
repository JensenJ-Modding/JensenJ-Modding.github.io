import { DefaultTheme } from "vitepress";

export default {
	"/youshallnottick": [
		{
			text: "You Shall Not Tick",
			link: "/youshallnottick",
			items: [
				{
					text: "Development Status",
					link: "/youshallnottick/development-status",
				},
				{
					text: "Changelogs",
					collapsed: true,
					items: [
						{
							text: "1.0.0",
							link: "/youshallnottick/changelogs/1.0.0",
						},
						{
							text: "1.1.x",
							link: "/youshallnottick/changelogs/1.1.x",
						},
						{
							text: "1.2.0",
							link: "/youshallnottick/changelogs/1.2.0",
						},
					],
				},
				{
					text: "Totem of Ticking",
					link: "/youshallnottick/totem-of-ticking",
				},
				{
					text: "Technical Details",
					link: "/youshallnottick/technical-details",
				},
				{
					text: "Configuration Guide",
					link: "/youshallnottick/config",
				},
			],
		},
	],
} as DefaultTheme.SidebarMulti;
