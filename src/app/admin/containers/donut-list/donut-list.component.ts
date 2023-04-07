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
        description: 'just-chocolate',
      },
      {
        id: 'y9z123',
        name: 'glazed-fudge',
        icon: 'glazed-fudge',
        price: 240,
        description: 'glazed-fudge',
      },
      {
        id: 'y6z123',
        name: 'caramel-swirl',
        icon: 'caramel-swirl',
        price: 121,
        description: 'caramel-swirl',
      },
    ];

  }
}
