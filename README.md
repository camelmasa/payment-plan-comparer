# payment-plan-comparer

Compare plan of payment service.

## Example

```js
> PaymentPlanComparer = require("payment-plan-comparer")
> comparer = new PaymentPlanComparer({ monthlySale: 1000000, monthlyTransaction: 1000 })
> comparer.compare()
[ { name: 'Komoju',
    serviceUrl: 'https://komoju.com',
    brands: [ 'Visa', 'MasterCard', 'JCB', 'American Express', 'Diners Club' ],
    paymentMethods: [ 'CreditCard', 'Konbini', 'BankTransfer', 'WebMoney', 'NetCash', 'BitCash', 'PayEasy', 'nanaco' ],
    monthlyFee: 32500 },
  { name: 'PAY.JP',
    serviceUrl: 'https://pay.jp',
    brands: [ 'Visa', 'MasterCard', 'JCB', 'American Express', 'Diners Club', 'Discover' ],
    paymentMethods: [ 'CreditCard' ],
    monthlyFee: 30000 },
  { name: 'PayPal エクスプレスチェックアウト',
    serviceUrl: 'https://www.paypal.com',
    brands: [ 'Visa', 'MasterCard', 'JCB', 'American Express' ],
    paymentMethods: [ 'CreditCard' ],
    monthlyFee: 40000 },
  { name: 'SPIKE ビジネスプラン',
    serviceUrl: 'https://spike.cc',
    brands: [ 'Visa', 'MasterCard' ],
    paymentMethods: [ 'CreditCard', 'PayEasy' ],
    monthlyFee: 38500 },
  { name: 'SPIKE フリープラン',
    serviceUrl: 'https://spike.cc',
    brands: [ 'Visa', 'MasterCard' ],
    paymentMethods: [ 'CreditCard', 'PayEasy' ],
    monthlyFee: 69000 },
  { name: 'Stripe',
    serviceUrl: 'https://stripe.com',
    brands: [ 'Visa', 'MasterCard', 'American Express' ],
    paymentMethods: [ 'CreditCard', 'Alipay', 'BankTransfer', 'Bitcoin' ],
    monthlyFee: 36000 },
  { name: 'WebPay プロプラン',
    serviceUrl: 'https://webpay.jp',
    brands: [ 'Visa', 'MasterCard', 'JCB', 'American Express', 'Diners Club' ],
    paymentMethods: [ 'CreditCard' ],
    monthlyFee: 36700 },
  { name: 'WebPay スタータープラン',
    serviceUrl: 'https://webpay.jp',
    brands: [ 'Visa', 'MasterCard', 'JCB', 'American Express', 'Diners Club' ],
    paymentMethods: [ 'CreditCard' ],
    monthlyFee: 32500 } ]
```
