'use strict'

import Payjp             from './plan/payjp.js'
import Komoju            from './plan/komoju.js'
import SpikeFreePlan     from './plan/spike-free-plan.js'
import SpikeBusinessPlan from './plan/spike-business-plan.js'
import Stripe            from './plan/stripe.js'
import WebPayStarterPlan from './plan/webpay-starter-plan.js'
import WebPayProPlan     from './plan/webpay-pro-plan.js'
import FastPay           from './plan/fastpay.js'
import PayPal            from './plan/paypal.js'

export default class PaymentPlanComparer {
  constructor({ monthlySale: monthlySale, monthlyTransaction: monthlyTransaction }) {
    this.monthlySale        = monthlySale
    this.monthlyTransaction = monthlyTransaction
  }

  compare() {
    return  [
      new Komoju(this.monthlySale, this.monthlyTransaction).plan(),
      new Payjp(this.monthlySale, this.monthlyTransaction).plan(),
      new PayPal(this.monthlySale, this.monthlyTransaction).plan(),
      new SpikeBusinessPlan(this.monthlySale, this.monthlyTransaction).plan(),
      new SpikeFreePlan(this.monthlySale, this.monthlyTransaction).plan(),
      new Stripe(this.monthlySale, this.monthlyTransaction).plan(),
      new WebPayProPlan(this.monthlySale, this.monthlyTransaction).plan(),
      new WebPayStarterPlan(this.monthlySale, this.monthlyTransaction).plan()
    ]
  }
}
