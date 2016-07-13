'use strict'

import Plan from '../plan.js'

export default class SpikeBusinessPlan extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "SPIKE ビジネスプラン"
    this.serviceUrl     = "https://spike.cc"
    this.brands         = ["Visa", "MasterCard"]
    this.paymentMethods = ["CreditCard", "PayEasy"]
    this.percentageFee  = 2.55
    this.transactionFee = 10
    this.monthlyFee     = 3000
  }
}
