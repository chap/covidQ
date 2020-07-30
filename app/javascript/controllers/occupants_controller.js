// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slider", "number" ]

  connect() {
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    console.log("Opportunity Stimulus loaded")
  }

  slide() {
    let selectedValue = this.sliderTarget.value
    this.numberTarget.value = selectedValue;
  }

  updateNumber() {
    let selectedValue = this.numberTarget.value
    this.sliderTarget.value = selectedValue;
  }
}
