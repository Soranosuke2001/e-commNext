const formatPrice = (amount: number | null) => {
  if (amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(amount / 100);
  }

  return "N/A";
};

export default formatPrice;
