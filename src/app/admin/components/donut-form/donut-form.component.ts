import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.less']
})
export class DonutFormComponent {

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

  public handleSubmit(form: NgForm): void {
    console.log(form.value);
  }

}
