# Calculate GST and Service Charge

## Usage

```
npm install calc-gst-plus-sc
```

```
const getTotalPrice = require('calc-gst-plus-sc');
const price = 100;
const totalPrice = getTotalPrice(price);

// Total price with Service Charge and GST
console.log(totalPrice);
```