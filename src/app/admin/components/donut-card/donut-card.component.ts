import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  templateUrl: './donut-card.component.html',
  styleUrls: ['./donut-card.component.css']
})
export class DonutCardComponent implements OnInit {
  @Input() donut!: Donut;

  constructor() { }

  ngOnInit(): void {
  }

}
