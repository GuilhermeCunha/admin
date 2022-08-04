import type { NextApiRequest, NextApiResponse } from "next";
import { Redirect } from "../../../entities/Redirect";

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    body,
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({
        id,
        source: "google.com/gmail",
        destinations: [
          {
            url: "google.com/v2/gmail",
          },
        ],
      } as Redirect);
      break;
    case "PUT":
      res.status(200).json({ id });
      break;
    case "DELETE":
      res.status(200).json({ id });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
