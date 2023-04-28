import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the user is logged in
  const userSession = await getServerSession(req, res, authOptions);
  if (!userSession) {
    res.status(403).json({ error: "Unauthorized Access" });
    return;
  }

  const { items, payment_intent_id } = await req.body;

  res.status(200).json({ userSession });
  return;
}
