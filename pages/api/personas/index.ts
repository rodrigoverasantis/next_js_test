import type { NextApiRequest, NextApiResponse } from "next";
import NextConnect from "next-connect";
import { connectToDatabase } from "../../../lib/mongodb";
import { Persona } from "./_common";

const handler = NextConnect()
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			let { db } = await connectToDatabase();
			let personas = await db
				.collection("personas")
				.find({})
				.sort({ published: -1 })
				.toArray();

			if (!personas) {
				return {
					notFound: true,
				}
			}
			return res.status(200).json(personas);
		} catch (error) {
			console.error(error);
			res.status(500).end();
		}
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			let { db } = await connectToDatabase();
			let body = req.body;
			let nuevaPersona = await db
				.collection("personas")
				.insertOne(body);

			res.status(201).json(nuevaPersona);
		} catch (error) {
			console.error(error);
			res.status(500).end();
		}
	});

export default handler;