'use strict'

import Plan from '../plan.js'

export default class WebPayStarterPlan extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "WebPay スタータープラン"
    this.serviceUrl     = "https://webpay.jp"
    this.percentageFee  = 3.25
  }
}
