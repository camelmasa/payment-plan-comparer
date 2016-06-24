'use strict'

import Plan from '../plan.js'

export default class Stripe extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "Stripe"
    this.percentageFee  = 3.6
  }
}
