// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IncomingMessage, ServerResponse } from "http";
import Database from '@database';

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new Database();
  const allEntries = await db.getAll();
  response.statusCode = 200;
  response.setHeader('Content-type' , 'application/json');
  response.end(JSON.stringify({ hello: allEntries, length : allEntries.length }));
};

export default allAvos;
