// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Redirect } from "../../../entities/Redirect";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    results: [
      {
        id: "1",
        source: "google.com/gmail",
        destinations: [
          {
            url: "google.com/v2/gmail",
          },
        ],
      } as Redirect,
    ],
  });
}
