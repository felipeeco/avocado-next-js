import { NextApiRequest, NextApiResponse } from "next";
import Database from '@database';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database();
  const id = request.query.id;  
  const entry = await db.getById(id as string);
  response.status(200).json({ entry });
};

export default allAvos;
