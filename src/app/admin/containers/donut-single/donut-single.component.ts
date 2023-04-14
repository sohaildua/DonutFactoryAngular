import { Component, OnInit } from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../service/donut.service";

@Component({
  selector: 'app-donut-single',
  templateUrl: 'donut-single.component.html',
  styleUrls: ['donut-single.component.css']
})
export class DonutSingleComponent implements OnInit {
  public donut! : Donut;
  constructor(private donutService : DonutService) { }

  ngOnInit(): void {
    /*const id ='y8z123';
    this.donut = this.donutService.readOne(id);*/
    }


  public onCreate(donut: Donut) {
   this.donutService.create(donut);
  }

  public onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }

  public onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }
}
