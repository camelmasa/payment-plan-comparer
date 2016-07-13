'use strict'

export default class Plan {
  constructor(monthlySale, monthlyTransaction) {
    this.monthlySale        = monthlySale
    this.monthlyTransaction = monthlyTransaction
    this.paymentMethods     = ["CreditCard"]

    this.percentageFee  = 0.0
    this.transactionFee = 0
    this.monthlyFee     = 0
  }

  plan() {
    return {
      name: this.name,
      serviceUrl: this.serviceUrl,
      brands: this.brands,
      paymentMethods: this.paymentMethods,
      monthlyFee: this.calculateMonthlyFee()
    }
  }

  calculateMonthlyFee() {
    return this.monthlySale * this.percentageFee / 100 + this.transactionFee * this.monthlyTransaction + this.monthlyFee
  }
}
