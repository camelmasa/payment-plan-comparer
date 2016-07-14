'use strict'

import Plan from '../plan.js'

export default class PayPal extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "PayPal エクスプレスチェックアウト"
    this.serviceUrl     = "https://www.paypal.com"
    this.brands         = ["Visa", "MasterCard", "JCB", "American Express"]
    this.transactionFee = 40
  }

  calculateMonthlyFee() {
    let percentage

    if (this.monthlySale <= 300000) {
      percentage = 3.6
    }
    else if (this.monthlySale <= 1000000) {
      percentage = 3.4
    }
    else if (this.monthlySale <= 10000000) {
      percentage = 3.2
    }
    else {
      percentage = 2.9
    }

    return this.monthlySale * percentage / 100 + this.transactionFee * this.monthlyTransaction
  }
}
