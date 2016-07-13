'use strict'

import Plan from '../plan.js'

export default class Payjp extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "PAY.JP"
    this.serviceUrl     = "https://pay.jp"
    this.brands         = ["Visa", "MasterCard", "JCB", "American Express", "Diners Club", "Discover"]
    this.percentageFee  = 3.0
  }
}
