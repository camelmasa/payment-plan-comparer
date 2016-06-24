'use strict'

import Plan from '../plan.js'

export default class FastPay extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "FastPay"
    this.percentageFee  = 3.25
  }
}
