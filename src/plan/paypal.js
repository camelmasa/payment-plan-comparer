'use strict'

import Plan from '../plan.js'

export default class PayPal extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "PayPal エクスプレスチェックアウト"
    this.serviceUrl     = "https://www.paypal.com"
    this.transactionFee = 40
  }

  service() {
    let monthlyFee

    if (this.monthlySale <= 300000) {
      monthlyFee = this.monthlySale * 3.6 / 100 + this.transactionFee * this.monthlyTransaction
    }
    else if (this.monthlySale <= 1000000) {
      monthlyFee = this.monthlySale * 3.4 / 100 + this.transactionFee * this.monthlyTransaction
    }
    else if (this.monthlySale <= 10000000) {
      monthlyFee = this.monthlySale * 3.2 / 100 + this.transactionFee * this.monthlyTransaction
    }
    else {
      monthlyFee = this.monthlySale * 2.9 / 100 + this.transactionFee * this.monthlyTransaction
    }

    return {
      name: this.name,
      monthlyFee: monthlyFee
    }
  }
}
