# payment-plan-comparer

Compare plan of payment service.

## Example

```js
> PaymentPlanComparer = require("payment-plan-comparer")
> comparer = new PaymentPlanComparer({ monthlySale: 1000000, monthlyTransaction: 1000 })
> comparer.compare()
[ { name: 'Komoju', monthlyFee: 32500 },
  { name: 'PAY.JP', monthlyFee: 30000 },
  { name: 'PayPal エクスプレスチェックアウト', monthlyFee: 74000 },
  { name: 'SPIKE ビジネスプラン', monthlyFee: 38500 },
  { name: 'SPIKE フリープラン', monthlyFee: 69000 },
  { name: 'Stripe', monthlyFee: 36000 },
  { name: 'WebPay プロプラン', monthlyFee: 36700 },
  { name: 'WebPay スタータープラン', monthlyFee: 32500 } ]
```
