function calcGSTPlusSC(originalPrice) {
  if (typeof(originalPrice) !== 'number') {
    return 0;
  }

  // GST 7%
  const GST = 7/100;

  // Service Charge 10%
  const SC = 10/100;

  // Price after Service Charge
  const subTotal = originalPrice + (originalPrice * SC);

  // Price with GST
  const priceWithGST = subTotal + (subTotal * GST);

  // Total price with 2 decimal
  const totalPrice = priceWithGST.toFixed(2) * 1;

  return totalPrice;
}

module.exports = calcGSTPlusSC;