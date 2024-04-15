import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css'],
})
export class PricingCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  title!: string;
  @Input()
  price!: string;
  @Input()
  description!: string;
  @Input()
  features!: string[];
  @Input()
  buttonColor!: string;
  @Input()
  iconColor!: string;
  @Input()
  showBadge: boolean = false;

}
