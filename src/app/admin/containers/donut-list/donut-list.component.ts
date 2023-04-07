import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: 'donut-list.component.html',
  styleUrls: ['donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z123',
        name: 'just-chocolate',
        icon: 'just-chocolate',
        price: 120,
        promo: 'new',
        description: 'just-chocolate',
      },
      {
        id: 'y9z123',
        name: 'glazed-fudge',
        icon: 'glazed-fudge',
        price: 240,
        promo: 'limited',
        description: 'glazed-fudge',
      },
      {
        id: 'y6z123',
        name: 'caramel-swirl',
        icon: 'caramel-swirl',
        price: 121,
        description: 'chocolate with caramel',
      },
      {
        id: '8amkZ9',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 121,
        description: 'For the sour advocate',
      },
      {
        id: 'l3mNoz',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 121,
        description: 'Delicious lucious Lemon',
      }
    ];

  }
}
