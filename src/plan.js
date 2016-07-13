'use strict'

export default class Plan {
  constructor(monthlySale, monthlyTransaction) {
    this.monthlySale        = monthlySale
    this.monthlyTransaction = monthlyTransaction

    this.percentageFee  = 0.0
    this.transactionFee = 0
    this.monthlyFee     = 0
  }

  service() {
    return {
      name: this.name,
      serviceUrl: this.serviceUrl,
      monthlyFee: this.monthlySale * this.percentageFee / 100 + this.transactionFee * this.monthlyTransaction + this.monthlyFee
    }
  }
}
