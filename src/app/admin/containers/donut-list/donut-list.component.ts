import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import {DonutService} from "../../service/donut.service";

@Component({
  selector: 'app-donut-list',
  templateUrl: 'donut-list.component.html',
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService : DonutService) {}

  ngOnInit(): void {
    this.donutService.read().subscribe((donuts:Donut[])=> this.donuts = donuts);
  }
}
