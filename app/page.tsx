import Stripe from "stripe";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  // Retrieves the list of products without the price
  const products = await stripe.products.list();

  // Retrieves the price of each product
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });

      return {
        id: product.id,
        name: product.name,
        prices: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
      }
    })
  )
  return productWithPrices;
};
export default function Home() {
  const products = getProducts();
  return <div className="text-4xl">This is the home page</div>;
}
