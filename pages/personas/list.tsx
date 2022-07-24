import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const View: NextPage = (props: Data) => {
	const router = useRouter();

	return (
		<Fragment>
			<Typography>Berries</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.results.map((row: Row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right" onClick={() => router.push(`/pokemon/${row.number}`, row.name)}>{row.url}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
}

type Data = {
	count: 0,
	next: "",
	previous: "",
	results: [Row],
}

type Row = {
	name: "",
	url: "",
	number: String,
}

export default View;