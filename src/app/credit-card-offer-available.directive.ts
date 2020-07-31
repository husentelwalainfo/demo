import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCreditCardOfferAvailable]'
})
export class CreditCardOfferAvailableDirective {
  // var d = new Date();
  // d.getDay();
  @Input() appCreditCardOfferAvailable: string;

  constructor(private variableForElementSelection: ElementRef) { 
    this.variableForElementSelection = variableForElementSelection;
    console.log(1);
  }
  ngOnInit() {
    this.variableForElementSelection.nativeElement.innerHTML +=" <a href='offer'>Credit card offer available</a>";
  }

}
