'use strict'

import Plan from '../plan.js'

export default class Payjp extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "PAY.JP"
    this.serviceUrl     = "https://pay.jp"
    this.percentageFee  = 3.0
  }
}
