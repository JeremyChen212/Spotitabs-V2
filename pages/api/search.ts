import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query?.q;
  const session = await getSession({ req });
console.log(session)
  const searchResults = await fetch(`https://api.spotify.com/v1/search?q=${query}&market=from_token&type=album,track,artist,playlist&limit=50`,
    {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    },
  }).then((res) => res.json());
  return res;
};
