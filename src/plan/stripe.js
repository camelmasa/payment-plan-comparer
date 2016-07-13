'use strict'

import Plan from '../plan.js'

export default class Stripe extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "Stripe"
    this.serviceUrl     = "https://stripe.com"
    // https://support.stripe.com/questions/which-cards-and-payment-types-can-i-accept-with-stripe
    this.brands         = ["Visa", "MasterCard", "American Express"]
    this.paymentMethods = ["CreditCard", "Alipay", "BankTransfer", "Bitcoin"]
    this.percentageFee  = 3.6
  }
}
