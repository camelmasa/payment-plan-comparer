'use strict'

import Plan from '../plan.js'

export default class WebPayStarterPlan extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "WebPay スタータープラン"
    this.percentageFee  = 3.25
  }
}
