'use strict'

import Plan from '../plan.js'

export default class SpikeFreePlan extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "SPIKE フリープラン"
    this.serviceUrl     = "https://spike.cc"
    this.brands         = ["Visa", "MasterCard"]
    this.paymentMethods = ["CreditCard", "PayEasy"]
    this.percentageFee  = 3.9
    this.transactionFee = 30
  }

  calculateMonthlyFee() {
    if (this.monthlySale <= 100000) {
      return 0
    }
    else {
      return this.monthlySale * this.percentageFee / 100 + this.transactionFee * this.monthlyTransaction
    }
  }
}
