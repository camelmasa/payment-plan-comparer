'use strict'

import Plan from '../plan.js'

export default class Komoju extends Plan {
  constructor(monthlySale, monthlyTransaction) {
    super(monthlySale, monthlyTransaction)

    this.name           = "Komoju"
    this.serviceUrl     = "https://komoju.com"
    this.percentageFee  = 3.25
  }
}
