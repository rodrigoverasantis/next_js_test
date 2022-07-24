import type { NextApiRequest, NextApiResponse } from "next";
import NextConnect from "next-connect";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import { Persona } from "./_common";

const handler = NextConnect()
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			let { db } = await connectToDatabase();
			let personaID = new ObjectId(String(req.query.id));
			let persona = await db
				.collection("personas")
				.findOne({ _id: personaID });

			if (!persona) {
				return {
					notFound: true,
				}
			}
			return res.json(persona);
		} catch (error) {
			console.error(error);
			res.status(500).end();
		}
	})
	.patch(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			let body = req.body;
			res.json({ name: body.name, height: body.height, weight: body.weight });
		} catch (error) {
			console.error(error);
			return {
				redirect: {
					destination: "/error/aaaaa",
					permanent: false,
				},
			}
		}
	})
	.delete((req: NextApiRequest, res: NextApiResponse) => {
		try {
			let pokemonID = req.query.id;
			res.status(200).end();
		} catch (error) {
			console.error(error);
			return {
				redirect: {
					destination: "/error/aaaaa",
					permanent: false,
				},
			}
		}
	})

export default handler;