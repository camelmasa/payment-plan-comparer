'use strict'

import Plan from '../plan.js'

export default class WebPayProPlan extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "WebPay プロプラン"
    this.serviceUrl     = "https://webpay.jp"
    this.brands         = ["Visa", "MasterCard", "JCB", "American Express", "Diners Club"]
    this.percentageFee  = 2.69
    this.monthlyFee     = 9800
  }
}
