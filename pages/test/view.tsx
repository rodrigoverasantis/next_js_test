import type { NextPage } from "next";
import React, { Fragment } from "react";
import { Button, Typography } from "@mui/material";

const View: NextPage = () => {
	return (
		<Fragment>
			<Typography>aaaa</Typography>
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>
		</Fragment>
	);
}

export default View;