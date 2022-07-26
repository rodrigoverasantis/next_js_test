import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import {
	Menu as MenuIcon,
	Inbox as InboxIcon,
	Mail as MailIcon,
} from "@mui/icons-material";

function MyApp({ Component, pageProps }: AppProps) {
	const [IsDrawerOpen, SetIsDrawerOpen] = useState(false);
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Fragment>
				{/* APP BAR */}
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
						<Toolbar>
							<IconButton onClick={() => SetIsDrawerOpen(true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								News
							</Typography>
							<Button color="inherit">Login</Button>
						</Toolbar>
					</AppBar>
				</Box>

				{/* DRAWER LATERAL */}
				<Drawer anchor="left" open={IsDrawerOpen} onClose={() => SetIsDrawerOpen(false)}>
					<Box role="presentation">
						<List>
							<ListItem disablePadding>
								<ListItemButton onClick={() => router.push("/")}>
									<ListItemIcon>
										<InboxIcon />
									</ListItemIcon>
									<ListItemText primary="Home" />
								</ListItemButton>
							</ListItem>
						</List>
						<Divider />
						<List>
							<ListItem disablePadding>
								<ListItemButton onClick={() => router.push("/pokemon/list")}>
									<ListItemIcon>
										<MailIcon />
									</ListItemIcon>
									<ListItemText primary="Test View" />
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			</Fragment>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp
