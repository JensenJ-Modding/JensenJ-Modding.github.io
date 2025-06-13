import { DefaultTheme } from "vitepress";

export default {
	"/youshallnotpatrol": [
		{
			text: "You Shall Not Patrol",
			link: "/youshallnotpatrol",
			items: [
				{
					text: "Development Status",
					link: "/youshallnotpatrol/development-status",
				},
				{
					text: "Changelogs",
					collapsed: true,
					items: [
						{
							text: "1.0.0",
							link: "/youshallnotpatrol/changelogs/1.0.0",
						}
					],
				},
				{
					text: "Technical Details",
					link: "/youshallnotpatrol/technical-details",
				},
				{
					text: "Configuration Guide",
					link: "/youshallnotpatrol/config",
				},
			],
		},
	],
} as DefaultTheme.SidebarMulti;
