import type { NextPage } from "next";
import { Typography } from "@mui/material";

const PokemonID: NextPage = (props) => {

	return (
		<div>
			<Typography>{JSON.stringify(props)}</Typography>
		</div>
	)
}

export default PokemonID;