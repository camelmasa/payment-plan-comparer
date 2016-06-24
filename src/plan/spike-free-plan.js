'use strict'

import Plan from '../plan.js'

export default class SpikeFreePlan extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "SPIKE フリープラン"
    this.percentageFee  = 3.9
    this.transactionFee = 30
  }

  service() {
    let monthlyFee

    if (this.monthlySale <= 100000) {
      monthlyFee = 0
    }
    else {
      monthlyFee = this.monthlySale * this.percentageFee / 100 + this.transactionFee * this.monthlyTransaction
    }

    return {
      name: this.name,
      monthlyFee: monthlyFee
    }
  }
}
