import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.less']
})
export class DonutFormComponent implements OnInit {

  public icons: string[] = [
    'caramel-swirl',
    'just-chocolate',
    'glazed-fudge',
    'sour-supreme',
    'zesty-lemon',
    'strawberry-glaze',
    'vanilla-sundae'
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
