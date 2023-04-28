import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Check if the user is logged in
  const userSession = await getServerSession(req, res, authOptions);
  if (!userSession?.user) {
    res.status(403).json({ error: "Unauthorized" });
  } else {
      const { items, payment_intent_id } = req.body;
      
      res.json({userSession})
  }


//   const orderData = {
//     user: { connect: { id: userSession?.user?.id } },
//   }
}
